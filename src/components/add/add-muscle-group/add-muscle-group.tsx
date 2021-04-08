import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AddList from "../add-list-new";

import DayBeingEdited from "../../../context/day";
import MuscleContext from "../../../context/muscle";

const AddMuscleGroup: React.FC = () => {
  const history = useHistory();

  const { dayEdit } = useContext(DayBeingEdited);
  const { setMuscle } = useContext(MuscleContext);

  useEffect(() => {}, [dayEdit]);

  return (
    <AddList
      header={`Muscle`}
      callback={(newMuscle) => {
        setMuscle(newMuscle);
        history.push({
          pathname: "/add-muscle-group/2",
          search: `?day=${dayEdit}&group=${newMuscle}`,
        });
      }}
    />
  );
};

export default AddMuscleGroup;
