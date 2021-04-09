import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

import { useAuthState } from "react-firebase-hooks/auth";

import ProgramDay from "./components/program/program-day";
import EditProgram from "./components/editprogram";
import Add from "./components/add/add";

import AddMuscleGroup from "./components/add/add-muscle-group/add-muscle-group";
import AddSectionFromMuscleGroup from "./components/add/add-muscle-group/add-section-from-muscle-group";
import AddExerciseFromMuscleGroup from "./components/add/add-muscle-group/add-exercise-from-muscle-group";

import AddSection from "./components/add/add-section/add-section";
import AddExerciseFromSection from "./components/add/add-section/add-exercise-from-section";

import AddExercise from "./components/add/add-exercise/add-exercise";

import AddNewDay from "./components/add/add-new-day/add-new-day";
import AddMuscleGroupNewDay from "./components/add/add-new-day/add-muscle-group-new-day";
import AddSectionNewDay from "./components/add/add-new-day/add-section-new-day";
import AddExerciseNewDay from "./components/add/add-new-day/add-exercise-new-day";

import ProgramContext from "./context/program";

import MuscleContext from "./context/muscle";

import Nav from "./components/nav/nav";

import SignIn from "./components/auth/sign-in";
import LoadingCode from "./components/loading-code";

import Home from "./components/home";
import firebaseApp from "./firebase";

import UsersLists from "./context/userlists";

const AppRouter: React.FC = () => {
  const { days, program, setProgram } = useContext(ProgramContext);
  const { muscleList, sectionList, exercisesList, setUsersList } = useContext(
    UsersLists
  );
  const { muscle } = useContext(MuscleContext);
  const [user] = useAuthState(firebaseApp.auth);

  const [renderSwitch, setRenderSwitch] = useState<JSX.Element[]>();

  const location = useLocation();
  const history = useHistory();

  const [loadingData, setLoadingData] = useState<boolean>();

  //make the user program a state
  //take the updateprogram out of the setPRogram hook

  useEffect(() => {
    if (user) {
      setLoadingData(true);
      firebaseApp.checkIn(user).then(() => {
        setProgram(firebaseApp.userProgram);
        setUsersList({
          newMuscleList: firebaseApp.muscleList,
          newSectionList: firebaseApp.sectionList,
          newExercisesList: firebaseApp.exercisesList,
        });
        setLoadingData(false);
      });
    }
  }, [user]);

  useEffect(() => {
    days &&
      setRenderSwitch(
        days.map(([name, data], idx) => {
          return (
            <Route exact path={`/${name}`}>
              <ProgramDay data={data} key={idx} />
            </Route>
          );
        })
      );
  }, [days, location.pathname]);

  return (
    <Router basename="/fitlog-pwa">
      <QueryParamProvider ReactRouterRoute={Route}>
        {!loadingData ? <Nav /> : <LoadingCode />}

        <Switch>
          {renderSwitch}
          {user ? (
            <Route>
              <Route
                exact
                path="/"
                render={() => (
                  <Redirect
                    to={program && days && days[0] ? `${days[0][0]}` : "/home"}
                  />
                )}
              />

              <Route exact path="/home">
                {user ? <Home /> : <SignIn />}
              </Route>

              <Route exact path="/edit">
                <EditProgram />
              </Route>

              {/* add new muscle group routes */}
              <Route exact path="/add-muscle-group">
                <AddMuscleGroup />;
              </Route>
              <Route exact path="/add-muscle-group/2">
                <AddSectionFromMuscleGroup />;
              </Route>
              <Route exact path="/add-muscle-group/3">
                <AddExerciseFromMuscleGroup />;
              </Route>

              {/* add new section routes */}
              <Route exact path="/add-section">
                <AddSection />
              </Route>
              <Route exact path="/add-section/2">
                <AddExerciseFromSection />
              </Route>

              {/* add new exercise routes */}
              <Route exact path="/add-exercise">
                <AddExercise />;
              </Route>

              {/* add new day routes*/}
              <Route exact path="/add-new-day">
                <AddNewDay />
              </Route>

              <Route exact path="/add-new-day/2">
                <AddMuscleGroupNewDay />
              </Route>
              <Route exact path="/add-new-day/3">
                <AddSectionNewDay />
              </Route>
              <Route exact path="/add-new-day/4">
                <AddExerciseNewDay />
              </Route>

              {/* add items to the AddList */}
              <Route exact path="/add-to-exercise-list">
                <Add
                  defaultValue={"new exercise"}
                  label={`Add Exercise to ${muscle}`}
                  buttonLabel={"add exercise"}
                  callback={(value) => {
                    if (value) {
                      const clonedList = exercisesList;
                      clonedList && clonedList[muscle].push(value);
                      setUsersList({ newExercisesList: clonedList });
                      firebaseApp.updateExerciseList(clonedList);
                      history.goBack();
                    } else {
                      //need to show an error if empty value
                    }
                  }}
                />
              </Route>
              <Route exact path="/add-to-section-list">
                <Add
                  defaultValue={"new section"}
                  label={`Add a New Section`}
                  buttonLabel={"add section"}
                  callback={(value) => {
                    if (value) {
                      const clonedList = sectionList;
                      clonedList && clonedList.push(value);
                      firebaseApp.updateSectionList(clonedList);
                      history.goBack();
                    }
                  }}
                />
              </Route>
              <Route exact path="/add-to-muscle-list">
                <Add
                  defaultValue={"new muscle"}
                  label={`Add a New Exercise Group`}
                  buttonLabel={"add group"}
                  callback={(value) => {
                    if (value) {
                      const clonedList = muscleList;
                      clonedList && clonedList.push(value);
                      const clonedExerciseList = exercisesList;
                      clonedExerciseList && (clonedExerciseList[value] = []);
                      firebaseApp.updateMuscleList(clonedList);
                      firebaseApp.updateExerciseList(clonedExerciseList);
                      history.goBack();
                    }
                  }}
                />
              </Route>
            </Route>
          ) : (
            <Route path="/">
              <SignIn />
            </Route>
          )}
        </Switch>
      </QueryParamProvider>
    </Router>
  );
};

export default AppRouter;
