import { formatDistanceToNow } from "date-fns";
import localforage from "localforage";
import React, { ReactChildren, useEffect, useState } from "react";
import type { LastUpdated as LastUpdatedType } from "../types/index";

export function useLastUpdated(statName: string) {
  const [lastUpdatedFromStorage, setLastUpdatedFromStorage] = useState<any>(
    null
  );
  const [lastUpdated, setLastUpdated] = useState<Date | "never">("never");

  useEffect(() => {
    if (!lastUpdatedFromStorage) {
      localforage
        .getItem<LastUpdatedType>("lastUpdated")
        .then((lastUpdatedLocal: any) => {
          const newLastUpdate = {
            [statName]: lastUpdatedLocal?.[statName] || "never",
          };
          localforage.setItem("lastUpdated", {
            ...newLastUpdate,
            ...lastUpdatedLocal,
          });
          setLastUpdatedFromStorage({ ...newLastUpdate, ...lastUpdatedLocal });
        })
        .catch((err) => console.error(err));
    }
  }, []);

  useEffect(() => {
    const newLastUpdate = { [statName]: lastUpdated || "never" };
    localforage.setItem("lastUpdated", {
      ...lastUpdatedFromStorage,
      ...newLastUpdate,
    });
    setLastUpdatedFromStorage({
      ...lastUpdatedFromStorage,
      ...newLastUpdate,
    });
  }, [statName, lastUpdated]);

  return [lastUpdatedFromStorage?.[statName], setLastUpdated];
}

export function LastUpdated(props: {
  children?: React.ReactNode;
  date?: Date;
}) {
  // TODO: set a timer to dynamically update the time since
  return (
    <div>
      {props.children || (
        <span>
          last updated:
          {Object.prototype.toString.call(props.date) === "[object Date]"
            ? formatDistanceToNow(props.date || new Date(), {
                includeSeconds: true,
              })
            : "never"}
        </span>
      )}
    </div>
  );
}
