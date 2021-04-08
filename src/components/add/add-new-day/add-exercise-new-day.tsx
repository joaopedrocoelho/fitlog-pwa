import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQueryParams, StringParam } from "use-query-params";

import AddList from "../add-list-new";

import ProgramContext from "../../../context/program";
import DayBeingEdited from "../../../context/day";
import MuscleContext from "../../../context/muscle";
import SectionContext from "../../../context/section";
import Program from "../../../interfaces/program";
import firebaseApp from "../../../firebase";

const AddExerciseNewDay = () => {
  const history = useHistory();
  const [query] = useQueryParams({
    day: StringParam,
    group: StringParam,
    sectionQ: StringParam,
  });

  const { day, group, sectionQ } = query;

  const { program, setProgram } = useContext(ProgramContext);
  const { dayEdit, setDay } = useContext(DayBeingEdited);
  const { muscle, setMuscle } = useContext(MuscleContext);
  const { section, setSection } = useContext(SectionContext);

  const [clonedProgram, setClonedProgram] = useState<Program>();

  useEffect(() => {
    if (program) {
      setClonedProgram(program);
    } else setClonedProgram({});
  }, [program]);

  return (
    <AddList
      header={"Exercise"}
      callback={(param) => {
        if (clonedProgram) {
          clonedProgram[dayEdit] = {};
          clonedProgram[dayEdit][muscle] = {};
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

export default AddExerciseNewDay;
