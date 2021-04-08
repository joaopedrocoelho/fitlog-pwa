import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useQueryParams, StringParam, NumberParam } from "use-query-params";

import AddList from "../add-list-new";

import DayBeingEdited from "../../../context/day";
import MuscleContext from "../../../context/muscle";

const AddMuscleGroupNewDay: React.FC = () => {
  const history = useHistory();
  const [query, setQuery] = useQueryParams({
    day: StringParam,
  });

  const { day } = query;

  const { dayEdit, setDay } = useContext(DayBeingEdited);
  const { setMuscle } = useContext(MuscleContext);

  return (
    <AddList
      header={`Muscle`}
      callback={(newMuscle) => {
        setMuscle(newMuscle);
        history.push({
          pathname: "/add-new-day/3",
          search: `?day=${dayEdit}&group=${newMuscle}`,
        });
      }}
    />
  );
};

export default AddMuscleGroupNewDay;
