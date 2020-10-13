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
    <div>
      <Button
        onClick={() => getStats(gamerTag)}
        label="Get LifeTime Stats"
        className="p-button-raised"
      />
      <div>
        {statsResponse && (
          <div>
            {Object.entries(statsResponse["total-stats"]).map(
              ([key, value]) => (
                <Stat statName={key} statValue={value}></Stat>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
