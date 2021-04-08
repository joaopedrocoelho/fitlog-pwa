import React from "react";
import FirebaseApp from "../../firebase";

const SignIn: React.FC = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        FirebaseApp.login();
      }}
      className={"sign-in-btn"}
    >
      Sign in with Google
    </button>
  );
};

export default SignIn;
