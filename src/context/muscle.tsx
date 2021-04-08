import React from "react";

export interface MuscleContextInt {
  muscle: string;
  setMuscle: (muscle: string) => void;
}

const MuscleContextDefault: MuscleContextInt = {
  muscle: "",
  setMuscle: (muscle: string): void => {},
};

const MuscleContext = React.createContext<MuscleContextInt>(
  MuscleContextDefault
);

export default MuscleContext;
