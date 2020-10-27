import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom";
import { FirebaseAppProvider, AuthCheck } from "reactfire";

import "primereact/resources/themes/vela-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// component imports
import "./assets/css/index.css";
import Menu from "./components/Menu";

import * as serviceWorker from "./serviceWorker";
import logo from "./assets/images/logo.webp";

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

function App() {
  const Main = lazy(() => import("./routes/Main"));
  const Login = lazy(() => import("./routes/Login"));

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Router>
        <Menu />
        <div id="app">
          <img src={logo} alt="title" id="header-image" />
          <Suspense fallback={<div>Loading...</div>}>
            <AuthCheck fallback={<Login />}>
              <Main />
            </AuthCheck>
          </Suspense>
        </div>
      </Router>
    </FirebaseAppProvider>
  );
}

// Enable Concurrent Mode
// https://reactjs.org/docs/concurrent-mode-adoption.html#enabling-concurrent-mode
createRoot(document.getElementById("root")).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
