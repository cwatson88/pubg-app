import React, { useState, useEffect, useRef } from "react";
import { useFirestore } from "reactfire";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function FindFriends({ uid, currentFriends = [] }) {
  const [friend, setFriend] = useState("");
  const [playerList, setPlayerList] = useState([]);

  const toastRef = useRef(null);

  const fireStore = useFirestore();
  const userCollection = useFirestore().collection("users");

  useEffect(() => {
    const searchFriend = async () => {
      const res = await fireStore.collection("users").get();
      const searchResults = res.docs.reduce((prev, curr) => {
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
  const addFriend = (friend) => {
    userCollection
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const currentFriends = doc.data().friends;
          const friends = [...currentFriends, friend];
          userCollection
            .doc(uid)
            .set({ friends }, { merge: true })
            .then(() =>
              toastRef.current.show({
                severity: "success",
                summary: "Friend Added",
                detail: "😎 new friend! Lets go!!!",
              })
            )
            .catch((err) =>
              toastRef.current.show({
                severity: "error",
                summary: "Friend not added",
                detail: `User was not added due to the error: ${err}`,
              })
            );
        }
      });
  };

  return (
    <div
      style={{ display: "grid", justifyItems: "center", marginBottom: "10px" }}
    >
      <br></br>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
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
              icon="pi pi-check"
              className="p-button-rounded button-icon__small"
              style={{ height: "20px", width: "20px" }}
              id="add-friend"
            />
          )}
        </div>
      ))}
      <Toast ref={toastRef} />
    </div>
  );
}
