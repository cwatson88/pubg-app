import localforage from "localforage";
import React, { useEffect, useState } from "react";
import type { LastUpdated } from "../types/index";

export default function useLastUpdated(statName: string) {
  const [lastUpdatedDate, setLastUpdatedDate] = useState<any>(null);

  const updateDate = async (newDate: string) => {
    let lastUpdate = await localforage.getItem<LastUpdated>("lastUpdated");

    //@ts-ignore
    lastUpdate[statName] = newDate;
    await localforage.setItem("lastUpdated", lastUpdate);
  };

  useEffect(() => {
    localforage
      .getItem<LastUpdated>("lastUpdated")
      .then(
        (lastUpdatedLocal) =>
          lastUpdatedLocal && setLastUpdatedDate(lastUpdatedLocal.weaponStats)
      );
  }, [lastUpdatedDate]);

  const LastUpdatedAt = ({ lastUpdatedDate }: { lastUpdatedDate: string }) => (
    <div>
      <span>last updated:{lastUpdatedDate ?? "never"} </span>
    </div>
  );

  return [lastUpdatedDate, setLastUpdatedDate, LastUpdatedAt];
}
