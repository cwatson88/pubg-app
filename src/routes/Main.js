import React, { useState, useEffect, lazy, Suspense } from "react";
import { useFirestore, useUser } from "reactfire";
import localforage from "localforage";
import { Switch, Route } from "react-router-dom";

import { wrapPromise } from "../util";
import RestrictedRoute from "../components/RestrictedRoute";

const getGamerTag = async (uid) => {
  try {
    const data = await localforage.getItem(uid);
    // This code runs once the value has been loaded
    // from the offline store.
    return data.gamerTag;
  } catch (err) {
    console.log(err);
  }
};

// Component should only show if the user is logged in
export default function Main() {
  const [userDatabaseDetails, setUserDatabaseDetails] = useState(false);
  const [gamerTag, setGamerTag] = useState(null);

  // details from users Google profile - email, displayName, photoURL, uid
  const { email, displayName, uid } = useUser();
  // read the user details from Firestore based on the current user's ID
  const collection = useFirestore().collection("users");
  const localGamer = wrapPromise(getGamerTag(uid));

  const GamerTagHeading = ({ gamerTag }) => {
    return (
      <h1>
        {gamerTag}
        <span className="subtitle__small"> - {displayName}</span>
      </h1>
    );
  };

  useEffect(() => {
    const getLocalStorage = async () => {
      const data = localforage.getItem(uid);
      setUserDatabaseDetails(data);
      setGamerTag(data.gamerTag);
      return data;
    };

    getLocalStorage();
  }, [uid]);

  useEffect(() => {
    const getUser = async () => {
      try {
        if (!userDatabaseDetails) {
          const userDoc = await collection.doc(uid);
          const doc = await userDoc.get();
          if (doc.exists) {
            console.log("Document data:", doc.data());
            setUserDatabaseDetails(doc.data());
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
      <Suspense fallback="getting your gamer details...">
        <GamerTagHeading gamerTag={gamerTag} />
      </Suspense>
      <div style={{ display: "grid", justifyItems: "center" }}>
        <Switch>
          <Route path="/account" collection={collection} uid={uid}>
            <Suspense fallback={<h1>getting your lifetime stats....</h1>}>
              <Account />
            </Suspense>
          </Route>

          <Route path="/friends">
            <Suspense fallback={<h1>Loading ??</h1>}>
              <Friends currentFriends={userDatabaseDetails.friends} uid={uid} />
            </Suspense>
          </Route>

          <RestrictedRoute
            auth={gamerTag}
            path="/lifetimestats"
            redirectURL="/account"
          >
            {console.log("loaded lifetime stats")}
            <Suspense fallback={"getting your lifetime stats..."}>
              <LifetimeStats gamerTag={gamerTag} />
            </Suspense>
          </RestrictedRoute>

          <RestrictedRoute
            auth={gamerTag}
            path="/gunstats"
            redirectURL="/account"
          >
            <Suspense fallback={"getting your gun stats..."}>
              <GunStats gamerTag={gamerTag} />
            </Suspense>
          </RestrictedRoute>
        </Switch>
      </div>
    </div>
  );
}
