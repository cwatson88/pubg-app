import React, { useState, useEffect } from "react";
import { useFirestore } from "reactfire";
import GunStats from "./GunStats";
import FindFriends from "./FindFriends";
import { InputText } from "primereact/inputtext";

// Component should only show if the user is logged in
export default function Main({ user }) {
  const [userDatabaseDetails, setUserDatabaseDetails] = useState({});

  // details from users Google profile - email, displayName, photoURL, uid
  const { email, displayName, uid } = user;
  // read the user details from Firestore based on the current user's ID
  const collection = useFirestore().collection("users");

  useEffect(() => {
    const userDoc = collection.doc(uid);
    userDoc
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setUserDatabaseDetails(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!", doc);
          addUser();
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  });

  function addUser() {
    collection
      .doc(uid)
      .set({
        email,
        displayName,
        gamerTag: "",
        friends: [],
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  // let { commonName, favoriteAnimal, profileImagePath } = useFirestoreDocData(
  //   userDetailsRef
  // );
  function updateGamerTag(gamerTag) {
    // will need to wrap this in a try catch and show that the gamertag has been added
    collection.doc(uid).set(
      {
        gamerTag,
      },
      { merge: true }
    );
  }

  function GamerTagInput({ updateGamerTag }) {
    const [gamerTagInput, setGamerTagInput] = useState("");
    return (
      <div>
        <InputText
          value={gamerTagInput}
          onChange={(e) => setGamerTagInput(e.target.value)}
        />
        {/* <input onChange={(e) => setGamerTagInput(e.target.value)}></input> */}
        <button onClick={() => updateGamerTag(gamerTagInput)}>
          let the games begin!!
        </button>
      </div>
    );
  }

  return (
    <div className="grid--center">
      <h1>
        {userDatabaseDetails?.gamerTag}
        <span className="subtitle__small"> - {displayName}</span>
      </h1>
      {!userDatabaseDetails?.gamerTag ? (
        <GamerTagInput updateGamerTag={updateGamerTag}></GamerTagInput>
      ) : (
        <div>
          <GunStats gamerTag={userDatabaseDetails?.gamerTag}></GunStats>
          <FindFriends
            currentFriends={userDatabaseDetails.friends}
            uid={uid}
          ></FindFriends>
        </div>
      )}
    </div>
  );
}
