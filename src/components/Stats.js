import React, { useState } from "react";
import { Button } from "primereact/button";

export default function Stats({ gamerTag }) {
  const [statsResponse, setStatsResponse] = useState(null);
  function getStats(gamerTag) {
    fetch(
      `https://pubg-rust-server-5y4ai7j7gq-ez.a.run.app/topguns/${gamerTag}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatsResponse(data);
      });
  }

  const Guns = ({ guns }) => {
    return (
      <ol className="gun-list">
        {guns.map(({ gun, kills }) => (
          <li key={gun}>
            <span>
              {gun} - {kills} <i>kills</i>
            </span>
          </li>
        ))}
      </ol>
    );
  };
  return (
    <div>
      <Button
        onClick={() => getStats(gamerTag)}
        label="Get top 5 guns"
        className="p-button-raised"
      />
      <div>{statsResponse && <Guns guns={statsResponse} />}</div>
    </div>
  );
}
