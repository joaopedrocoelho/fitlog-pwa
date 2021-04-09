import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import AddList from "../add-list-new";

import DayBeingEdited from "../../../context/day";
import MuscleContext from "../../../context/muscle";

const AddMuscleGroupNewDay: React.FC = () => {
  const history = useHistory();

  const { dayEdit } = useContext(DayBeingEdited);
  const { setMuscle } = useContext(MuscleContext);

  return (
    <AddList
      header={`Muscle`}
      callback={(newMuscle) => {
        !Array.isArray(newMuscle) && setMuscle(newMuscle);
        history.push({
          pathname: "/add-new-day/3",
          search: `?day=${dayEdit}&group=${newMuscle}`,
        });
      }}
    />
  );
};

export default AddMuscleGroupNewDay;
