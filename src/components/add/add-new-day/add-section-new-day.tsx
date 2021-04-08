import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQueryParams, StringParam } from "use-query-params";

import AddList from "../add-list-new";

import DayBeingEdited from "../../../context/day";
import MuscleContext from "../../../context/muscle";
import SectionContext from "../../../context/section";

const AddSectionNewDay: React.FC = () => {
  const history = useHistory();
  const [query, setQuery] = useQueryParams({
    day: StringParam,
    group: StringParam,
  });
  const { day, group } = query;
  const { dayEdit, setDay } = useContext(DayBeingEdited);
  const { muscle, setMuscle } = useContext(MuscleContext);
  const { section, setSection } = useContext(SectionContext);

  return (
    <AddList
      header={"Section"}
      callback={(param) => {
        setSection(param);
        history.push({
          pathname: "/add-new-day/4",
          search: `?day=${dayEdit}&group=${muscle}&sectionQ=${param}`,
        });
      }}
    />
  );
};

export default AddSectionNewDay;
