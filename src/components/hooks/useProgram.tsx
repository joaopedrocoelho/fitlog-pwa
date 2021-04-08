import React from "react";

import Program, { muscleGroup } from "../../interfaces/program";

export const useProgram = () => {
  const [program, setEditedProgram] = React.useState<Program | undefined>();

  const [days, setProgramDays] = React.useState<
    [string, muscleGroup][] | undefined
  >(program && Object.entries(program));

  const setProgram = React.useCallback((newProgram: Program): void => {
    setEditedProgram(newProgram);
    setProgramDays(Object.entries(newProgram));
  }, []);

  return {
    program,
    days,
    setProgram,
  };
};
