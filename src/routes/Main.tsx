import React, { useState, useEffect, lazy, Suspense } from "react";
import { useFirestore, useUser } from "reactfire";
import localforage from "localforage";
import { Switch, Route } from "react-router-dom";

import { wrapPromise } from "../util";
import RestrictedRoute from "../components/RestrictedRoute";
import { User } from "firebase";
import type { GoogleProfile, UserDatabaseDetails } from "../types";

export default function Main() {
  const [
    userDatabaseDetails,
    setUserDatabaseDetails,
  ] = useState<UserDatabaseDetails | null>(null);

  const { email, displayName, uid }: GoogleProfile | User = useUser();
  // read the user details from Firestore based on the current user's ID
  const usersFBCollection = useFirestore().collection("users");

  const getLocalStorage = (uid: string) => {
    try {
      const data = localforage.getItem<UserDatabaseDetails>(uid);

      return {
        data: wrapPromise(data),
      };
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const createFirebaseUser = async () => {
      try {
        await usersFBCollection.doc(uid).set({
          email,
          displayName,
          gamerTag: "",
          friends: [],
        });
        console.log("Document successfully written!");
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    };

    const setLocalStorage = async (
      docData: firebase.firestore.DocumentData
    ) => {
      try {
        console.log("Document data:", docData);
        // Unlike localStorage, you can store non-strings.
        const data = await localforage.setItem(uid, docData);
        console.log("added to local storage", data);
      } catch (error) {
        console.error("unable to set local storage", error);
      }
    };

    const getUser = async () => {
      try {
        if (!userDatabaseDetails) {
          const userDoc = usersFBCollection.doc(uid);
          const doc = await userDoc.get();
          if (doc.exists) {
            // TODO: work out how to handle the use case if there is not any data returned
            const data = doc.data();
            if (data) {
              setLocalStorage(data);
              setUserDatabaseDetails(data);
            } else {
              throw Error("no data");
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!", doc);
            createFirebaseUser();
          }
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };
    getUser();
  }, [usersFBCollection, displayName, email, uid, userDatabaseDetails]);

  const localGamer = getLocalStorage(uid);

  const GunStats = lazy(() => import("./GunStats"));
  const LifetimeStats = lazy(() => import("./LifetimeStats"));
  const Friends = lazy(() => import("./Friends"));
  const Account = lazy(() => import("./Account"));

  return (
    <div className="grid--center">
      <Suspense fallback={"loading the GT"}>
        <GamerTagHeading localGamer={localGamer} displayName={displayName} />
      </Suspense>
      <div style={{ display: "grid", justifyItems: "center" }}>
        <Suspense fallback={"loading route"}>
          <Switch>
            <Route path="/account" collection={usersFBCollection} uid={uid}>
              <Account collection={usersFBCollection} uid={uid} />
            </Route>

            <Route path="/friends">
              <Friends
                currentFriends={userDatabaseDetails?.friends || []}
                uid={uid}
              />
            </Route>

            <RestrictedRoute
              auth={localGamer}
              path="/lifetimestats"
              redirectURL="/account"
              render={(props: any) => <LifetimeStats {...props} />}
            />

            <RestrictedRoute
              auth={localGamer}
              path="/gunstats"
              redirectURL="/account"
              render={(props: any) => <GunStats {...props} />}
            />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

// Section for the Gamer tag and username.
// This component should only show if the user is logged in
function GamerTagHeading({
  localGamer,
  displayName,
}: {
  localGamer: any;
  displayName: GoogleProfile["displayName"] | null;
}) {
  const { gamerTag } = localGamer.data?.read() ?? null;
  console.log(gamerTag);
  return (
    <h1>
      {gamerTag}
      <span className="subtitle__small"> - {displayName}</span>
    </h1>
  );
}
