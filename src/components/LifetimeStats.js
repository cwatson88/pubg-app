import React, { useState } from "react";
import localforage from "localforage";
import { Button } from "primereact/button";
import Stat from "./Stat";

export default function LifetimeStats({ gamerTag }) {
  const [statsResponse, setStatsResponse] = useState(null);
  function getStats(gamerTag) {
    localforage
      .getItem("lifetimeStats")
      .then((data) => {
        console.log(data);
        setStatsResponse(data);
      })
      .catch(function (err) {
        // This code runs if there were any errors
        console.log(err);
      });
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

  return (
    <div style={{ display: "grid", justifyItems: "center" }}>
      <Button
        onClick={() => getStats(gamerTag)}
        label="Get LifeTime Stats"
        className="p-button-raised"
      />
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
