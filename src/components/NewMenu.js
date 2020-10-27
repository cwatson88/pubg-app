import React, { useRef, useState } from "react";
import firebase from "firebase";
import { useHistory, Link } from "react-router-dom";

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

export function Menu() {
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

export default function BurgerMenu(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const BurgerIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="burger-icon"
      viewBox="0 0 24 24"
      fill="white"
      width="18px"
      height="18px"
      onClick={() => setMenuVisible(true)}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="close-icon"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      onClick={() => setMenuVisible(false)}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );

  const menuItems = [
    {
      subMenu: "Menu",
      items: [
        {
          label: "Home",
          icon: <Home></Home>,
          url: "/",
        },
      ],
    },
    {
      subMenu: "Stats",
      items: [
        {
          label: "Lifetime Stats",
          icon: "pi pi-fw pi-home",
          url: "/lifetimestats",
        },
        {
          label: "Gun Stats",
          icon: "pi pi-fw pi-home",
          url: "/gunstats",
        },
      ],
    },
    {
      subMenu: "Account",
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
    <div>
      <BurgerIcon />
      <div
        className={
          menuVisible
            ? "burger-menu burger-menu__visible"
            : "burger-menu burger-menu__hidden"
        }
      >
        <CloseIcon />
        {menuItems.map(({ subMenu, items }) => (
          <>
            <h3>{subMenu}</h3>
            {apiMethods.map((item) => (
              <Link
                key={item}
                onClick={() => setMenuVisible(false)}
                className="menu-item"
                to:href={`#api-${method}`}
              >
                {method}
              </Link>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
