import React, { useState, useEffect, useCallback } from "react";
import localforage from "localforage";
import Stat from "../components/Stat";
import Button from "../components/Button";

export default function LifetimeStats({ gamerTag }) {
  const [statsResponse, setStatsResponse] = useState(null);
  const [lastUpdated, setLastUpdated] = useState();

  function getStats(gamerTag) {
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
      const { lastUpdated, data } = localforage.getItem("lifetimeStats");
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
