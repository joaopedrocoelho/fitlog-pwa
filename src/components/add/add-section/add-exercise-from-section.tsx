import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AddList from "../add-list-new";

import ProgramContext from "../../../context/program";
import DayBeingEdited from "../../../context/day";
import MuscleContext from "../../../context/muscle";
import SectionContext from "../../../context/section";
import Program from "../../../interfaces/program";
import firebaseApp from "../../../firebase";

const AddExerciseFromSection = () => {
  const history = useHistory();

  const { program, setProgram } = useContext(ProgramContext);
  const { dayEdit } = useContext(DayBeingEdited);
  const { muscle } = useContext(MuscleContext);
  const { section } = useContext(SectionContext);

  const [clonedProgram, setClonedProgram] = useState<Program>();

  useEffect(() => {
    if (program) {
      setClonedProgram(program);
    }
  }, [program]);

  return (
    <AddList
      header={"Exercise"}
      callback={(param) => {
        if (clonedProgram) {
          clonedProgram[dayEdit][muscle][section] = [];
          clonedProgram[dayEdit][muscle][section].push(param);
          firebaseApp.updateProgram(clonedProgram);
          setProgram(clonedProgram);
          history.push(`/${dayEdit}`);
        }
      }}
    />
  );
};

export default AddExerciseFromSection;
