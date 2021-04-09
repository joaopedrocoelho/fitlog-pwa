import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AddList from "../add-list-new";

import ProgramContext from "../../../context/program";
import DayBeingEdited from "../../../context/day";
import MuscleContext from "../../../context/muscle";
import SectionContext from "../../../context/section";
import Program from "../../../interfaces/program";
import firebaseApp from "../../../firebase";

const AddExercise: React.FC = () => {
  const history = useHistory();

  const { program, setProgram } = useContext(ProgramContext);
  const { dayEdit } = useContext(DayBeingEdited);
  const { muscle } = useContext(MuscleContext);
  const { section } = useContext(SectionContext);

  const [clonedDay, setClonedDay] = useState<Program>();
  const [clonedProgram, setClonedProgram] = useState<Program>();

  useEffect(() => {
    if (program) {
      setClonedDay(program);
      setClonedProgram(program);
    }
  }, []);

  return (
    <AddList
      header={"Exercise"}
      callback={(param) => {
        if (clonedDay && clonedProgram) {
          Array.isArray(param)
            ? clonedDay[dayEdit][muscle][section].push(...param)
            : clonedDay[dayEdit][muscle][section].push(param);
          clonedProgram[dayEdit] = clonedDay[dayEdit];
          firebaseApp.updateProgram(clonedProgram);
          setProgram(clonedProgram);
          history.push(`/${dayEdit}`);
        }
      }}
    />
  );
};

export default AddExercise;
