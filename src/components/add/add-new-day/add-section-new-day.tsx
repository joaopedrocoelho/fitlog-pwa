import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import AddList from "../add-list-new";

import DayBeingEdited from "../../../context/day";
import MuscleContext from "../../../context/muscle";
import SectionContext from "../../../context/section";

const AddSectionNewDay: React.FC = () => {
  const history = useHistory();

  const { dayEdit } = useContext(DayBeingEdited);
  const { muscle } = useContext(MuscleContext);
  const { setSection } = useContext(SectionContext);

  return (
    <AddList
      header={"Section"}
      callback={(param) => {
        !Array.isArray(param) && setSection(param);
        history.push({
          pathname: "/add-new-day/4",
          search: `?day=${dayEdit}&group=${muscle}&sectionQ=${param}`,
        });
      }}
    />
  );
};

export default AddSectionNewDay;
