import React from "react";

export const useLists = () => {
  const [muscleList, setMuscleList] = React.useState<string[]>();
  const [sectionList, setSectionList] = React.useState<string[]>();
  const [exercisesList, setExerciseList] = React.useState<
    Record<string, string[]>
  >();

  const setUsersList = React.useCallback(
    (newList: {
      newMuscleList?: string[] | undefined;
      newSectionList?: string[] | undefined;
      newExercisesList?: Record<string, string[]> | undefined;
    }): void => {
      newList.newMuscleList && setMuscleList(newList.newMuscleList);
      newList.newSectionList && setSectionList(newList.newSectionList);
      newList.newExercisesList && setExerciseList(newList.newExercisesList);
    },
    []
  );

  return {
    muscleList,
    sectionList,
    exercisesList,
    setUsersList,
  };
};
