import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();

  return (
    <FontAwesomeIcon
      icon={faCaretLeft}
      className={"back-button"}
      onClick={() => {
        history.goBack();
      }}
    />
  );
};

export default BackButton;
