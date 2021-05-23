import React, { useContext, useState } from "react";
import EditLabel from "./edit-label";
import { useHistory } from "react-router-dom";

import ProgramContext from "../../context/program";
import AddButton from "../add/add-button";
import DayBeingEdited from "../../context/day";
import SectionContext from "../../context/section";
import MuscleContext from "../../context/muscle";
import firebaseApp from "../../firebase";

interface Props {
  name: string;
  exercises: string[];
  dayId: number;
  dayName: string;
  muscleId: number;
  typeId: number;
}

const EditProgramExercises: React.FC<Props> = ({
  name,
  exercises,
  dayId,
  dayName,
  muscleId,
  typeId,
}) => {
  const { days, setProgram } = useContext(ProgramContext);
  const { dayEdit, setDay } = useContext(DayBeingEdited);
  const { muscle, setMuscle } = useContext(MuscleContext);
  const { section, setSection } = useContext(SectionContext);

  const muscles = days && Object.entries(days[dayId][1]);
  const history = useHistory();

  const exerciseType = muscles && Object.entries(muscles[muscleId][1]);
  const [exerciseList, setExerciseList] = useState<string[]>(exercises);

  return days && muscles && exerciseType ? (
    <div className="ProgramExercises">
      <h5>
        <EditLabel
          labelText={name}
          editElement={(changedName) => {
            if (name !== changedName) {
              exerciseType[typeId][0] = changedName;
              const changedExerciseType = Object.fromEntries(exerciseType);
              muscles[muscleId][1] = changedExerciseType;
              days[dayId][1] = Object.fromEntries(muscles);
              firebaseApp.updateProgram(Object.fromEntries(days));
              setProgram(Object.fromEntries(days));
            }
          }}
          deleteElement={() => {
            exerciseType.splice(typeId, 1);
            const changedExerciseType = Object.fromEntries(exerciseType);
            muscles[muscleId][1] = changedExerciseType;
            days[dayId][1] = Object.fromEntries(muscles);
            firebaseApp.updateProgram(Object.fromEntries(days));
            setProgram(Object.fromEntries(days));
          }}
          size={"2x"}
        />
      </h5>

      <ul className="edit-exercises">
        <AddButton
          caption={"exercise"}
          callback={() => {
            setDay(dayName);
            setSection(exerciseType[typeId][0]);
            setMuscle(muscles[muscleId][0]);

            history.push({
              pathname: `/add-exercise`,
              search: `?day=${dayEdit}&group=${muscle}&sectionQ=${section}`,
            });
          }}
        />
        {exerciseList.map((name, index) => (
          <li key={`${name}-${index}`}>
            <EditLabel
              labelText={name}
              editElement={(changedName) => {
                if (name !== changedName) {
                  exercises[index] = changedName;
                  setExerciseList([...exercises]);
                  exerciseType[typeId][1] = exercises;
                  muscles[muscleId][1] = Object.fromEntries(exerciseType);
                  days[dayId][1] = Object.fromEntries(muscles);
                  firebaseApp.updateProgram(Object.fromEntries(days));
                  setProgram(Object.fromEntries(days));
                }
              }}
              deleteElement={() => {
                exerciseList.splice(index, 1);
                setExerciseList([...exerciseList]);
                exerciseType[typeId][1] = exercises;

                muscles[muscleId][1] = Object.fromEntries(exerciseType);

                days[dayId][1] = Object.fromEntries(muscles);
                firebaseApp.updateProgram(Object.fromEntries(days));
                setProgram(Object.fromEntries(days));
              }}
              size={"lg"}
            />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div> </div>
  );
};

export default EditProgramExercises;
