import React, { useRef } from "react";
import { Menu as PrimeMenu } from "primereact/menu";
import { Button } from "primereact/button";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch(function (error) {
      console.error(error);
      // An error happened.
    });
};

export default function Menu() {
  const ref = useRef(null);
  let history = useHistory();

  let items = [
    {
      label: "Menu",
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          command: () => {
            history.push("/");
          },
        },
      ],
    },
    {
      label: "Stats",
      items: [
        {
          label: "Lifetime Stats",
          icon: "pi pi-fw pi-home",
          command: () => {
            history.push("/lifetimestats");
          },
        },
        {
          label: "Gun Stats",
          icon: "pi pi-fw pi-home",
          command: () => {
            history.push("/gunstats");
          },
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
            history.push("/account");
          },
        },
        { label: "Sign Out", icon: "pi pi-fw pi-power-off", command: signOut },
      ],
    },
  ];

  return (
    <div id="user-menu">
      <PrimeMenu model={items} popup ref={ref} style={{ right: 0 }} />
      <Button
        aria-label="user menu"
        icon="pi pi-bars"
        onClick={(event) => ref.current.toggle(event)}
      />
    </div>
  );
}
