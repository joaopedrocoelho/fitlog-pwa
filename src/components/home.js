import React, { useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory, withRouter } from "react-router";
import ProgramContext from "../context/program";
import FirebaseApp from "../firebase";
import AddButton from "./add/add-button";
import SignIn from "./auth/sign-in";

const Home = (props) => {
  const [user, loading, error] = useAuthState(FirebaseApp.auth);
  const { days } = useContext(ProgramContext);
  const history = useHistory();

  useEffect(() => {
    if (days && days[0] !== undefined) {
      history.push(`/${days[0][0]}`);
    }
  }, [days]);

  return (
    <div>
      {user ? (
        <>
          <h2>Hello, {user.displayName}! let's start creating your workout:</h2>
          <AddButton
            caption={"day"}
            styleClass={"add-day-btn"}
            callback={() => {
              history.push({
                pathname: `/add-new-day`,
              });
            }}
          />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default withRouter(Home);
