import React, { useState, useEffect, useCallback } from "react";
import localforage from "localforage";
import Stat from "../components/Stat";
import Button from "../components/Button";
import type { PUBGStats } from "../types";
import { useLastUpdated, LastUpdated } from "../components/LastUpdated";

export default function LifetimeStats({ gamerTag }: { gamerTag: string }) {
  const [statsResponse, setStatsResponse] = useState<PUBGStats | null>(null);
  const [lastUpdatedAt, setLastUpdated] = useLastUpdated("weaponStats");

  const getStats = async (gamerTag: string) => {
    try {
      const response = await fetch(
        `https://pubg-rust-server-5y4ai7j7gq-ez.a.run.app/lifetime/${gamerTag}`
      );
      const data = await response.json();
      setLastUpdated(new Date());
      console.log(data);
      setStatsResponse(data);

      const res = await localforage.setItem("lifetimeStats", data);
      console.log("added to local storage", res);
    } catch (error) {
      console.error(error);
    }
  };

  const getStatsFromLocalStorage = useCallback(async () => {
    try {
      const data = await localforage.getItem<any>("lifetimeStats");
      setStatsResponse(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getStatsFromLocalStorage();
  }, [getStatsFromLocalStorage]);

  return (
    <div style={{ display: "grid", justifyItems: "center" }}>
      {console.log("loaded lifetime stats")}
      <Button onClick={() => getStats(gamerTag)} className="p-button-raised">
        Update LifeTime Stats
      </Button>
      <LastUpdated date={lastUpdatedAt}></LastUpdated>
      <div>
        {statsResponse && (
          <div className="stat-items">
            {Object.entries(statsResponse["total-stats"]).map(
              ([key, value]) => (
                <Stat
                  key={key}
                  statName={value.friendly_name}
                  statValue={value.value}
                  category={value.category}
                ></Stat>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
