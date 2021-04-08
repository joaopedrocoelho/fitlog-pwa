import React from "react";
import { MuscleContextInt } from "../../context/muscle";

export const useMuscle = (): MuscleContextInt => {
  const [muscle, setNewMuscle] = React.useState<string>("");

  const setMuscle = React.useCallback((muscle: string): void => {
    setNewMuscle(muscle);
  }, []);

  return {
    muscle,
    setMuscle,
  };
};
