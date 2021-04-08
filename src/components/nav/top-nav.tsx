import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HamburgerEmphatic } from "react-animated-burgers";
import BurgerMenu from "./burger-menu";

import "./menu.css";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseApp from "../../firebase";

const TopNav = () => {
  const [IsActive, setIsActive] = useState<boolean>(false);
  const [IsSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [user, loading, error] = useAuthState(firebaseApp.auth);

  return (
    <>
      <BurgerMenu
        isOpen={IsSideMenuOpen}
        callback={() => {
          setIsActive(false);
          setIsSideMenuOpen(false);
        }}
      />
      <HamburgerEmphatic
        isActive={IsActive}
        className={"burger-menu-btn"}
        toggleButton={() => {
          setIsActive(!IsActive);
          setIsSideMenuOpen(!IsSideMenuOpen);
        }}
        barColor="white"
      />
      <h3 className="nav-header">Workout</h3>
      {user && (
        <Link to="/edit">
          <FontAwesomeIcon icon={faEdit} size="1x" />
        </Link>
      )}
    </>
  );
};

export default TopNav;
