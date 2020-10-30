import React, { useState } from "react";
import Button from "../components/Button";
import localforage from "localforage";

type TopGuns = Array<{ gun: string; kills: string }>;

// Guns component
const Guns = ({ guns }: { guns: TopGuns }) => {
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

export default function GunStats({ gamerTag }: { gamerTag: string }) {
  const [statsResponse, setStatsResponse] = useState<TopGuns>([]);

  const getStats = async (gamerTag: string) => {
    getLocalStats();
    await fetchStats(gamerTag);
  };

  const getLocalStats = async () => {
    try {
      const topGuns = (await localforage.getItem<TopGuns>("topGuns")) ?? [];
      console.log(topGuns);
      setStatsResponse(topGuns);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStats = async (gamerTag: string) => {
    try {
      const data = await fetch(
        `https://pubg-rust-server-5y4ai7j7gq-ez.a.run.app/topguns/${gamerTag}`
      );
      const topGuns: TopGuns = await data.json();
      console.log(topGuns);
      setStatsResponse(topGuns);
      setLocalStats(topGuns);
    } catch (error) {
      console.error(error);
    }
  };

  const setLocalStats = async (topGuns: TopGuns) => {
    try {
      await localforage.setItem("topGuns", topGuns);
      console.log("added to local storage", topGuns);
    } catch (error) {
      console.error("could not add data to local storage", error);
    }
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <Button onClick={() => getStats(gamerTag)} className="p-button-raised">
        Get top 5 guns
      </Button>
      <div>{statsResponse && <Guns guns={statsResponse} />}</div>
    </div>
  );
}
