import React, { useState } from "react";
import { Button } from "primereact/button";
import Stat from "./Stat";

export default function LifetimeStats({ gamerTag }) {
  const [statsResponse, setStatsResponse] = useState(null);
  function getStats(gamerTag) {
    fetch(`http://localhost:8080/lifetime/${gamerTag}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatsResponse(data);
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
