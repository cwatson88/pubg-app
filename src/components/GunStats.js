import React, { useState } from "react";
import { Button } from "primereact/button";
import localforage from "localforage";

export default function GunStats({ gamerTag }) {
  const [statsResponse, setStatsResponse] = useState(null);

  function getStats(gamerTag) {
    localforage
      .getItem("topGuns")
      .then((data) => {
        console.log(data);
        setStatsResponse(data);
      })
      .catch(function (err) {
        // This code runs if there were any errors
        console.log(err);
      });
    fetch(
      `https://pubg-rust-server-5y4ai7j7gq-ez.a.run.app/topguns/${gamerTag}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatsResponse(data);
        localforage
          .setItem("topGuns", data)
          .then((data) => {
            // This will output `1`.
            console.log("added to local storage", data);
          })
          .catch((err) => console.log(err));
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
    <div style={{ marginBottom: "15px" }}>
      <Button
        onClick={() => getStats(gamerTag)}
        label="Get top 5 guns"
        className="p-button-raised"
      />
      <div>{statsResponse && <Guns guns={statsResponse} />}</div>
    </div>
  );
}
