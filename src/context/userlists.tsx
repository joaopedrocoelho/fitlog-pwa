import React from "react";
import exerciseGroupsList from "../components/add/default-data/exercisegroups";
import ExercisesList from "../components/add/default-data/exercises";
import muscleList from "../components/add/default-data/muscles";

interface UsersListsInt {
  muscleList: string[] | undefined;
  sectionList: string[] | undefined;
  exercisesList: Record<string, string[]> | undefined;
  setUsersList: (newlist: {
    newMuscleList?: string[] | undefined;
    newSectionList?: string[] | undefined;
    newExercisesList?: Record<string, string[]> | undefined;
  }) => void;
}

const UsersLists = React.createContext<UsersListsInt>({
  muscleList: muscleList,
  sectionList: exerciseGroupsList,
  exercisesList: ExercisesList,
  setUsersList: (newList: {
    newMuscleList?: string[] | undefined;
    newSectionList?: string[] | undefined;
    newExercisesList?: Record<string, string[]> | undefined;
  }): void => {},
});

export default UsersLists;
