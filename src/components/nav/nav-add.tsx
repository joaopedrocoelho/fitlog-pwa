import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import BackButton from "./back-button";
import PlusButton from "./plus-button";

interface Props {
  header?: string;
  plus?: boolean;
}

const NavAdd: React.FC<Props> = ({ header, plus = true }) => {
  const [headerFromPath, setHeader] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/add-muscle")) {
      location.pathname === "/add-muscle-group" && setHeader("Add Muscle");
      location.pathname === "/add-muscle-group/2" && setHeader("Add Section");
      location.pathname === "/add-muscle-group/3" && setHeader("Add Exercise");
    } else if (location.pathname.startsWith("/add-section")) {
      location.pathname === "/add-section" && setHeader("Add Section");
      location.pathname === "/add-section/2" && setHeader("Add Exercise");
    } else if (location.pathname.startsWith("/add-exercise")) {
      setHeader("Add Exercise");
    } else if (location.pathname.startsWith("/add-new-day")) {
      location.pathname === "/add-new-day" && setHeader("Add Day");
      location.pathname === "/add-new-day/2" && setHeader("Add Muscle");
      location.pathname === "/add-new-day/3" && setHeader("Add Section");
      location.pathname === "/add-new-day/4" && setHeader("Add Exercise");
    }
  }, [location.pathname]);

  return (
    <nav className={"add"}>
      <BackButton />
      <h3 className={"nav-header"}>{header || headerFromPath}</h3>
      {plus && location.pathname !== "/add-new-day" && (
        <PlusButton header={headerFromPath && headerFromPath} />
      )}
    </nav>
  );
};

export default NavAdd;
