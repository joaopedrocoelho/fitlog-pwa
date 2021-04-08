import React, { useContext, useState, useEffect } from "react";
import EditProgramExercises from "./edit-program-exercises";
import EditLabel from "./edit-label";
import ProgramContext from "../../context/program";
import { useHistory } from "react-router-dom";

import { exerciseCategory, muscleGroup } from "../../interfaces/program";
import AddButton from "../add/add-button";
import DayBeingEdited from "../../context/day";
import MuscleContext from "../../context/muscle";
import firebaseApp from "../../firebase";

interface Props {
  name: string;
  data: object;
  dayId: number;
  dayName: string;
  muscleId: number;
}

const EditProgramPart: React.FC<Props> = ({
  name,
  data,
  dayId,
  muscleId,
  dayName,
}) => {
  const types = Object.entries(data);
  const { days, setProgram } = useContext(ProgramContext);
  const { dayEdit, setDay } = useContext(DayBeingEdited);
  const { muscle, setMuscle } = useContext(MuscleContext);
  const [muscles, setMuscles] = useState<[string, exerciseCategory][]>();

  useEffect(() => {
    days && setMuscles(Object.entries(days[dayId][1]));
  }, []);

  const history = useHistory();

  return (
    <div className="ProgramPart">
      <h2 className={"edit"}>
        <EditLabel
          labelText={name}
          editElement={(changedName) => {
            if (muscles && days) {
              if (name !== changedName) {
                muscles[muscleId][0] = changedName;
                const obj: muscleGroup = Object.fromEntries(muscles);
                days[dayId][1] = obj;
                firebaseApp.updateProgram(Object.fromEntries(days));
                setProgram(Object.fromEntries(days));
              }
            }
          }}
          deleteElement={() => {
            if (muscles && days) {
              muscles.splice(muscleId, 1);
              const obj: muscleGroup = Object.fromEntries(muscles);
              days[dayId][1] = obj;
              firebaseApp.updateProgram(Object.fromEntries(days));
              setProgram(Object.fromEntries(days));
            }
          }}
        />
      </h2>

      <AddButton
        caption={"exercise type"}
        callback={() => {
          setDay(dayName);
          setMuscle(name);

          history.push({
            pathname: `/add-section`,
            search: `?day=${dayEdit}&group=${muscle}`,
          });
        }}
      />
      {types.map(([name, exercises], index) => (
        <EditProgramExercises
          name={name}
          exercises={exercises}
          dayId={dayId}
          dayName={dayName}
          muscleId={muscleId}
          typeId={index}
        />
      ))}
    </div>
  );
};

export default EditProgramPart;
