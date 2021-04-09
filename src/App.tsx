import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";

import SetProgram from "./context/program";
import SetAdd from "./context/add";
import SetMuscle from "./context/muscle";
import SetSection from "./context/section";
import SetDay from "./context/day";

import "./styles/global.css";

import { useProgram } from "./components/hooks/useProgram";
import { useAdd } from "./components/hooks/useAdd";
import { useMuscle } from "./components/hooks/useMuscle";
import { useDay } from "./components/hooks/useDay";
import { useSection } from "./components/hooks/useSection";
import { useLists } from "./components/hooks/useLists";
import firebaseApp from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import LoadingCode from "./components/loading-code";
import UsersLists from "./context/userlists";

function App() {
  const program = useProgram();
  const defaultObj = useAdd();
  const muscle = useMuscle();
  const section = useSection();
  const day = useDay();
  const lists = useLists();
  const [user, loading, error] = useAuthState(firebaseApp.auth);

  useEffect(() => {
    if (user) {
      window.onbeforeunload = function () {
        return true;
      };
      return () => {
        window.onbeforeunload = null;
      };
    }
  }, [user]);

  //useEffect(() => {}, [program]);

  return (
    <div className="App">
      <UsersLists.Provider value={lists}>
        <SetProgram.Provider value={program}>
          <SetAdd.Provider value={defaultObj}>
            <SetMuscle.Provider value={muscle}>
              <SetSection.Provider value={section}>
                <SetDay.Provider value={day}>
                  <Router>{loading ? <LoadingCode /> : <AppRouter />}</Router>
                </SetDay.Provider>
              </SetSection.Provider>
            </SetMuscle.Provider>
          </SetAdd.Provider>
        </SetProgram.Provider>
      </UsersLists.Provider>
    </div>
  );
}

export default App;
