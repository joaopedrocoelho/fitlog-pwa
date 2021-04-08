import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import firebaseApp from "../../firebase";

import SignIn from "../auth/sign-in";

import SignOut from "../auth/sign-out";

interface Props {
  isOpen: boolean;
  callback: () => void;
}

const BurgerMenu: React.FC<Props> = ({ isOpen, callback }) => {
  const [user] = useAuthState(firebaseApp.auth);

  return (
    <>
      <div className={isOpen ? "burger-menu menu-active" : "burger-menu"}>
        <ul>
          <li className="user-info">
            {user && (
              <>
                <img src={user.photoURL!} alt={user.displayName!} />
                {user.displayName}
              </>
            )}
            <span onClick={() => callback()}>
              {user ? <SignOut /> : <SignIn />}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
