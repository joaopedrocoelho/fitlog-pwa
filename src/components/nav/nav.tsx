import React, { useContext, useState, useEffect } from "react";
import { withRouter, NavLink, useLocation } from "react-router-dom";

import ProgramContext from "../../context/program";

import TopNav from "./top-nav";
import NavAdd from "./nav-add";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseApp from "../../firebase";

const Nav: React.FC = () => {
  const { days } = useContext(ProgramContext);
  const location = useLocation();

  const [renderWorkoutNav, setRenderWorkoutNav] = useState<
    JSX.Element[] | JSX.Element
  >();
  const [renderTopNav, setRenderTopNav] = useState<JSX.Element>();

  const [user] = useAuthState(firebaseApp.auth);

  useEffect(() => {
    //logged out
    if (!user) {
      setRenderTopNav(<TopNav />);
      setRenderWorkoutNav(undefined);
    }
    //logged in
    else if (user && !location.pathname.startsWith("/add")) {
      setRenderTopNav(<TopNav />);
      days //has a program
        ? setRenderWorkoutNav(
            days.map(([name, data], idx) => {
              return (
                <NavLink
                  to={`/${name}`}
                  className={location.pathname === `/${name}` ? "active" : ""}
                >
                  {name}
                </NavLink>
              );
            })
          )
        : setRenderWorkoutNav(undefined);
    } else {
      setRenderTopNav(<NavAdd />);
      setRenderWorkoutNav(undefined);
    }
  }, [days, location.pathname, user]);

  useEffect(() => {
    if (location.pathname === `/pdf`) {
      setRenderTopNav(undefined);
      setRenderWorkoutNav(undefined);
    }
  }, [location.pathname]);

  return (
    <>
      {renderTopNav && <nav>{renderTopNav}</nav>}
      {renderWorkoutNav && (
        <nav className={"days-container"}>{renderWorkoutNav}</nav>
      )}
    </>
  );
};

export default withRouter(Nav);
