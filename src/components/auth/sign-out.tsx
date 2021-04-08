import React, { useContext } from "react";
import { useHistory } from "react-router";
import ProgramContext from "../../context/program";
import FirebaseApp from "../../firebase";

const SignOut = () => {
  const { setProgram } = useContext(ProgramContext);

  const history = useHistory();

  return (
    <button
      onClick={() => {
        FirebaseApp.logout().then(() => {
          setProgram({});
          history.push("/home");
          console.log(history);
        });
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
