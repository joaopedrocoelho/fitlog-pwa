import React, { useContext } from "react";
import { useHistory } from "react-router";

import DayBeingEdited from "../../../context/day";
import ProgramContext from "../../../context/program";
import Add from "../add";

const AddNewDay = () => {
  const { days } = useContext(ProgramContext);
  const { setDay } = useContext(DayBeingEdited);

  const history = useHistory();

  return (
    <Add
      defaultValue={days ? `Day ${days.length + 1}` : "Day 1"}
      label={"Choose a name"}
      buttonLabel={"day"}
      callback={(value) => {
        value && setDay(value);
        history.push({
          pathname: "/add-new-day/2",
          search: `?day=${value}`,
        });
      }}
    />
  );
};

export default AddNewDay;
