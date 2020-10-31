import React, { useState, useEffect } from "react";
import { useFirestore } from "reactfire";
import Button from "../components/Button";
import type { FriendProps } from "../types";

export default function FindFriends({ uid, currentFriends = [] }: FriendProps) {
  const [friend, setFriend] = useState("");
  const [playerList, setPlayerList] = useState<string[]>([]);

  const fireStore = useFirestore();
  const userCollection = useFirestore().collection("users");

  useEffect(() => {
    const searchFriend = async () => {
      const res = await fireStore.collection("users").get();
      const searchResults = res.docs.reduce((prev: string[], curr) => {
        const { gamerTag } = curr.data();
        const matched = gamerTag.toLowerCase().includes(friend.toLowerCase());
        if (matched) {
          prev.push(gamerTag);
        }
        return prev;
      }, []);

      setPlayerList(searchResults);
    };

    if (friend.length > 2) {
      searchFriend();
    } else {
      setPlayerList([]);
    }
  }, [friend, fireStore]);

  // TODO:!currently can add the same person twice
  const addFriend = async (friend: string) => {
    try {
      const doc = await userCollection.doc(uid).get();
      if (doc.exists) {
        const currentFriends = doc.data()?.friends;
        const friends = [...currentFriends, friend];
        userCollection.doc(uid).set({ friends }, { merge: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{ display: "grid", justifyItems: "center", marginBottom: "10px" }}
    >
      <br></br>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <input
          value={friend}
          onChange={(e) => setFriend(e.target.value)}
          placeholder="Find Stadia Friends"
        />
      </span>
      {playerList.map((player) => (
        <div className="find-player" key={player}>
          <p>{player}</p>
          {currentFriends.includes(player) ? (
            <i>
              Already a friend{" "}
              <span role="img" aria-label="fist pump">
                👊
              </span>
            </i>
          ) : (
            <Button
              onClick={() => addFriend(player)}
              className="p-button-rounded button-icon__small"
              style={{ height: "20px", width: "20px" }}
              id="add-friend"
            />
          )}
        </div>
      ))}
    </div>
  );
}
