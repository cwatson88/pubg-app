import React, { useState, useEffect, lazy, Suspense } from "react";
import { useFirestore, useUser } from "reactfire";
import localforage from "localforage";
import { Switch, Route } from "react-router-dom";

import { wrapPromise } from "../util";
import RestrictedRoute from "../components/RestrictedRoute";
import { User } from "firebase";

const getGamerTag = async (uid: string) => {
  try {
    const data: UserDatabaseDetails | null = await localforage.getItem(uid);
    // This code runs once the value has been loaded
    // from the offline store.
    return data?.gamerTag;
  } catch (err) {
    console.log(err);
  }
};
interface GoogleProfile {
  email: string;
  displayName: string;
  uid: string;
}

interface UserDatabaseDetails extends firebase.firestore.DocumentData {
  friends?: Array<string>;
  gamerTag?: string;
  [x: string]: any;
}

// Component should only show if the user is logged in
export default function Main() {
  const [
    userDatabaseDetails,
    setUserDatabaseDetails,
  ] = useState<UserDatabaseDetails | null>(null);
  const [gamerTag, setGamerTag] = useState<string>("");

  // details from users Google profile - email, displayName, photoURL, uid
  const { email, displayName, uid }: GoogleProfile | User = useUser();
  // read the user details from Firestore based on the current user's ID
  const collection = useFirestore().collection("users");
  const localGamer = wrapPromise(getGamerTag(uid));

  const GamerTagHeading = ({ gamerTag }: { gamerTag: string }) => {
    return (
      <h1>
        {gamerTag}
        <span className="subtitle__small"> - {displayName}</span>
      </h1>
    );
  };

  useEffect(() => {
    const getLocalStorage = async () => {
      const data:
        | UserDatabaseDetails
        | firebase.firestore.DocumentData
        | null = await localforage.getItem(uid);
      setUserDatabaseDetails(data);
      setGamerTag(data?.gamerTag ?? "");
      return data;
    };

    getLocalStorage();
  }, [uid]);

  useEffect(() => {
    const getUser = async () => {
      try {
        if (!userDatabaseDetails) {
          const userDoc = collection.doc(uid);
          const doc = await userDoc.get();
          if (doc.exists) {
            console.log("Document data:", doc.data());
            doc.data() && setUserDatabaseDetails(doc.data() || null);
            // Unlike localStorage, you can store non-strings.
            try {
              const data = await localforage.setItem(uid, doc.data());
              console.log("added to local storage", data);
            } catch (error) {
              console.error("unable to set local storage", error);
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!", doc);
            try {
              await collection.doc(uid).set({
                email,
                displayName,
                gamerTag: "",
                friends: [],
              });
              console.log("Document successfully written!");
            } catch (error) {
              console.error("Error writing document: ", error);
            }
          }
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };
    getUser();
  }, [collection, displayName, email, uid, userDatabaseDetails]);

  const GunStats = lazy(() => import("./GunStats"));
  const LifetimeStats = lazy(() => import("./LifetimeStats"));
  const Friends = lazy(() => import("./Friends"));
  const Account = lazy(() => import("./Account"));

  return (
    <div className="grid--center">
      <Suspense fallback={"loading the GT"}>
        <GamerTagHeading gamerTag={gamerTag} />
      </Suspense>
      <div style={{ display: "grid", justifyItems: "center" }}>
        <Suspense fallback={"frabbing route"}>
          <Switch>
            <Route path="/account" collection={collection} uid={uid}>
              <Account collection={collection} uid={uid} />
            </Route>

            <Route path="/friends">
              <Friends
                currentFriends={userDatabaseDetails?.friends || []}
                uid={uid}
              />
            </Route>

            <RestrictedRoute
              auth={gamerTag}
              path="/lifetimestats"
              redirectURL="/account"
            >
              <LifetimeStats gamerTag={gamerTag} />
            </RestrictedRoute>

            <RestrictedRoute
              auth={gamerTag}
              path="/gunstats"
              redirectURL="/account"
            >
              <GunStats gamerTag={gamerTag} />
            </RestrictedRoute>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}
