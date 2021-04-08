import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface Props {
  caption: string;

  callback?: () => void;
  styleClass?: "add-day-btn" | "add-btn";
}

const AddButton: React.FC<Props> = ({
  caption,

  callback,
  styleClass = "add-btn",
}) => {
  return (
    <button
      className={styleClass}
      onClick={() => {
        callback && callback();
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
      {caption}
    </button>
  );
};

export default AddButton;
