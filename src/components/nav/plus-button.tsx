import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import MuscleContext from "../../context/muscle";

import { useHistory } from "react-router";

interface Props {
  header: string;
}

interface linkURLInt {
  pathname: string;
  search: string;
}

const PlusButtton: React.FC<Props> = ({ header }) => {
  const { muscle } = useContext(MuscleContext);
  const history = useHistory();

  const [linkURL, setLinkURL] = useState<linkURLInt>({
    pathname: ``,
    search: `?`,
  });

  useEffect(() => {
    if (header === "Add Exercise") {
      setLinkURL({
        pathname: `/add-to-exercise-list`,
        search: `?group=${muscle}`,
      });
    } else if (header === "Add Section") {
      setLinkURL({
        pathname: `/add-to-section-list`,
        search: ``,
      });
    } else if (header === "Add Muscle") {
      setLinkURL({
        pathname: `/add-to-muscle-list`,
        search: ``,
      });
    }
  }, [header]);

  return (
    <FontAwesomeIcon
      icon={faPlus}
      className={"plus-button"}
      onClick={() => {
        history.push(linkURL);
      }}
    />
  );
};

export default PlusButtton;
