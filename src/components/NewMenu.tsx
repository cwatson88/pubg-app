import React, { ReactElement, useState } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import Home from "./icons/Home";
import Settings from "./icons/Settings";
import SignOut from "./icons/SignOut";
import "../assets/css/menu.css";

interface MenuItems {
  subMenu: string;
  items: Array<{
    label: string;
    icon: ReactElement;
    url?: string;
    command?: Function;
  }>;
}

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

export default function BurgerMenu() {
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

  const menuItems: MenuItems[] = [
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
          icon: <Home></Home>,
          url: "/lifetimestats",
        },
        {
          label: "Gun Stats",
          icon: <Home></Home>,
          url: "/gunstats",
        },
      ],
    },
    {
      subMenu: "Account",
      items: [
        {
          label: "Options",
          icon: <Settings />,
          url: "/account",
        },
        { label: "Sign Out", icon: <SignOut />, command: signOut },
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
            <ul>
              {items.map(({ label, url = "", icon: Icon, command }) => (
                <li
                  onClick={() => {
                    setMenuVisible(false);
                    command && command();
                  }}
                >
                  {/* <Icon /> */}
                  <Link key={label} className="menu-item" to={url}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </div>
  );
}
