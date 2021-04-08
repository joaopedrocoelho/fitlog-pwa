import React from "react";
import Program, { muscleGroup } from "../interfaces/program";

export interface ProgramContextInt {
  program: Program | undefined;
  days: Array<[string, muscleGroup]> | undefined;
  setProgram: (p: Program) => void;
}

export const DefaultProgramContext: ProgramContextInt = {
  program: undefined,
  days: undefined,
  setProgram: (p: Program): void => {},
};

const ProgramContext = React.createContext<ProgramContextInt>(
  DefaultProgramContext
);

export default ProgramContext;
