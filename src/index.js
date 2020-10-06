import React, { useRef } from "react";
import { createRoot } from "react-dom";
import "./index.css";
import Main from "./Main";
import firebase from "firebase";
import "primereact/resources/themes/vela-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";

import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore,
  SuspenseWithPerf,
  useAuth,
  AuthCheck,
  useUser,
} from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyB4hb1gi-W3n8kmC-nRdNY-_Fyn-iCQvTI",
  authDomain: "pubg-291421.firebaseapp.com",
  databaseURL: "https://pubg-291421.firebaseio.com",
  projectId: "pubg-291421",
  storageBucket: "pubg-291421.appspot.com",
  messagingSenderId: "630199848571",
  appId: "1:630199848571:web:c589745b458975a7ea9cde",
  measurementId: "G-KKCBE1MPK6",
};
function LogInButton() {
  const auth = useAuth();
  const logIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    auth.signInWithPopup(provider); // promise is not needed
  };

  return (
    <button onClick={logIn} className="google-sign-in__btn">
      <span>
        <img
          className="firebaseui-idp-icon"
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        />
      </span>
      <span>Sign in with Google</span>
    </button>
  );
}

const FirebaseAuthStateButton = () => {
  const user = useUser();
  return user ? <Main user={user} /> : <LogInButton />;
};

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
};

const UserMenu = () => {
  const ref = useRef(null);
  let items = [
    {
      label: "Menu",
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          url: "/",
        },
      ],
    },
    {
      label: "Account",
      items: [
        {
          label: "Options",
          icon: "pi pi-fw pi-cog",
          command: () => {
            // window.location.hash = "/";
          },
        },
        { label: "Sign Out", icon: "pi pi-fw pi-power-off", command: signOut },
      ],
    },
  ];

  return (
    <div id="user-menu">
      <Menu model={items} popup ref={ref} style={{ right: 0 }} />
      <Button
        label=""
        icon="pi pi-bars"
        onClick={(event) => ref.current.toggle(event)}
      />
    </div>
  );
};

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <UserMenu />
      <div id="bkg-img"></div>
      <div id="app">
        <img src="https://pngimg.com/uploads/pubg/pubg_PNG29.png" alt="title" />
        {/* <h1 className="subtitle">Stat Ground</h1> */}
        <SuspenseWithPerf
          traceId={"firebase-user-wait"}
          fallback={<p>loading...</p>}
        >
          <FirebaseAuthStateButton />
        </SuspenseWithPerf>
      </div>
    </FirebaseAppProvider>
  );
}

// Enable Concurrent Mode
// https://reactjs.org/docs/concurrent-mode-adoption.html#enabling-concurrent-mode
createRoot(document.getElementById("root")).render(<App />);
