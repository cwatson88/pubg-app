import React, { useState, useEffect, useCallback } from "react";
import localforage from "localforage";
import Stat from "../components/Stat";
import Button from "../components/Button";

interface PUBGStats {
  "total-stats": Array<{
    friendly_name: string;
    value: number;
    category: string;
  }>;
}

export default function LifetimeStats({ gamerTag }: { gamerTag: string }) {
  const [statsResponse, setStatsResponse] = useState<PUBGStats | null>(null);
  const [lastUpdated, setLastUpdated] = useState();

  function getStats(gamerTag: string) {
    fetch(
      `https://pubg-rust-server-5y4ai7j7gq-ez.a.run.app/lifetime/${gamerTag}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatsResponse(data);
        localforage
          .setItem("lifetimeStats", data)
          .then((data) => {
            // This will output `1`.
            console.log("added to local storage", data);
          })
          .catch((err) => console.log(err));
      });
  }

  const getStatsFromLocalStorage = useCallback(async () => {
    try {
      const { lastUpdated, data } = await localforage.getItem<any>(
        "lifetimeStats"
      );
      setLastUpdated(lastUpdated);
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
      <span>last updated:{lastUpdated} </span>
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
