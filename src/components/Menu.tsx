import React, { ReactElement, useState } from "react";
import firebase from "firebase";
import { NavLink } from "react-router-dom";
import Home from "./icons/Home";
import Settings from "./icons/Settings";
import SignOut from "./icons/SignOut";
import "../assets/css/menu.css";
// https://hamburger-react.netlify.app/
import { Squash as Hamburger } from "hamburger-react";

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
    <div className="menu-wrapper">
      {/* <BurgerIcon /> */}
      <div className="menu__burger-icon">
        <Hamburger
          color="#000"
          size={15}
          onToggle={(toggled) => {
            toggled ? setMenuVisible(true) : setMenuVisible(false);
          }}
        />
      </div>

      <div
        className={
          menuVisible
            ? "burger-menu burger-menu__visible"
            : "burger-menu burger-menu__hidden"
        }
      >
        {menuItems.map(({ subMenu, items }) => (
          <div key={subMenu}>
            <h3>{subMenu}</h3>
            <ul>
              {items.map(({ label, url = "", icon, command }) => (
                <NavLink key={label} to={url}>
                  <li
                    key={label}
                    onClick={() => {
                      setMenuVisible(false);
                      command && command();
                    }}
                  >
                    {icon}

                    {label}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
