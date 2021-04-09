import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import AddList from "../add-list-new";

import DayBeingEdited from "../../../context/day";
import MuscleContext from "../../../context/muscle";
import SectionContext from "../../../context/section";

const AddSection: React.FC = () => {
  const history = useHistory();

  const { dayEdit } = useContext(DayBeingEdited);
  const { muscle } = useContext(MuscleContext);
  const { section, setSection } = useContext(SectionContext);

  return (
    <AddList
      header={"Section"}
      callback={(param) => {
        !Array.isArray(param) && setSection(param);
        history.push({
          pathname: "/add-section/2",
          search: `?day=${dayEdit}&group=${muscle}&sectionQ=${section}`,
        });
      }}
    />
  );
};

export default AddSection;
