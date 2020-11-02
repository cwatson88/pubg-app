import localforage from "localforage";
import React, { ReactChildren, useEffect, useState } from "react";
import type { LastUpdated as LastUpdatedType } from "../types/index";

export function useLastUpdated(statName: string) {
  const [lastUpdatedFromStorage, setLastUpdatedFromStorage] = useState<any>(
    null
  );
  const [lastUpdated, setLastUpdated] = useState<any>("never");

  useEffect(() => {
    if (!lastUpdatedFromStorage) {
      localforage
        .getItem<LastUpdatedType>("lastUpdated")
        .then((lastUpdatedLocal: any) => {
          const newLastUpdate = {
            [statName]: lastUpdatedLocal?.[statName] || "never",
          };

          localforage.setItem("lastUpdated", newLastUpdate);
          setLastUpdatedFromStorage(newLastUpdate);
        })
        .catch((err) => console.error("hit this err"));
    }
  }, []);

  useEffect(() => {
    const newLastUpdate = { [statName]: lastUpdated || "never" };
    localforage.setItem("lastUpdated", newLastUpdate);
    setLastUpdatedFromStorage(newLastUpdate);
  }, [statName, lastUpdated]);

  return [lastUpdatedFromStorage?.[statName], setLastUpdated];
}

export function LastUpdated(props: { children: ReactChildren }) {
  return (
    <div>
      <span>last updated:{props.children} </span>
    </div>
  );
}
