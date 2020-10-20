import React, { useState, useEffect } from "react";
import { useFirestore } from "reactfire";
import GunStats from "./GunStats";
import FindFriends from "./FindFriends";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import LifetimeStats from "./LifetimeStats";

// Component should only show if the user is logged in
export default function Main({ user }) {
  const [userDatabaseDetails, setUserDatabaseDetails] = useState(false);
  const [gamerTag, setGamerTag] = useState(true);
  const [loading, setLoading] = useState(true);

  // details from users Google profile - email, displayName, photoURL, uid
  const { email, displayName, uid } = user;
  // read the user details from Firestore based on the current user's ID
  const collection = useFirestore().collection("users");

  useEffect(() => {
    if (!userDatabaseDetails) {
      const userDoc = collection.doc(uid);
      userDoc
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            doc.data().gamerTag ? setGamerTag(true) : setGamerTag(false);
            setLoading(false);
            setUserDatabaseDetails(doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!", doc);
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
            setGamerTag(false);
            setLoading(false);
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, [collection, displayName, email, uid, userDatabaseDetails]);

  function updateGamerTag(gamerTag) {
    // will need to wrap this in a try catch and show that the gamertag has been added
    try {
      collection
        .doc(uid)
        .set(
          {
            gamerTag,
          },
          { merge: true }
        )
        .then(() => setGamerTag(true));
    } catch (error) {
      console.error(error);
    }
  }

  function GamerTagInput({ updateGamerTag }) {
    const [gamerTagInput, setGamerTagInput] = useState("");
    return (
      <div>
        <h3>Add your gamer tag to begin!</h3>
        <InputText
          id="gamer-tag-input"
          value={gamerTagInput}
          onChange={(e) => setGamerTagInput(e.target.value)}
          style={{ marginRight: "5px" }}
        />

        <Button label="Submit" onClick={() => updateGamerTag(gamerTagInput)} />
      </div>
    );
  }

  return (
    <div className="grid--center">
      {loading && "getting your gamer details..."}
      {!loading && !gamerTag ? (
        <GamerTagInput updateGamerTag={updateGamerTag}></GamerTagInput>
      ) : (
        <>
          {userDatabaseDetails && (
            <>
              <h1>
                {userDatabaseDetails?.gamerTag}
                <span className="subtitle__small"> - {displayName}</span>
              </h1>
              <div style={{ display: "grid", justifyItems: "center" }}>
                <FindFriends
                  currentFriends={userDatabaseDetails.friends}
                  uid={uid}
                ></FindFriends>
                <GunStats gamerTag={userDatabaseDetails?.gamerTag}></GunStats>
                <LifetimeStats
                  gamerTag={userDatabaseDetails?.gamerTag}
                ></LifetimeStats>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
