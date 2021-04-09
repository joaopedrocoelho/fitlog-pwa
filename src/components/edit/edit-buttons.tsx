import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClickEdit?: (e: any) => void;
  onClickDel?: (e: any) => void;
  deleteVisible?: boolean;
  size?:
    | "2x"
    | "xs"
    | "lg"
    | "sm"
    | "1x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
}

const EditButtons: React.FC<Props> = ({
  onClickEdit,
  onClickDel,
  size,
  children,
  deleteVisible,
}) => {
  return (
    <>
      <FontAwesomeIcon
        icon={faPen}
        className={"edit-icon"}
        onClick={(e) => {
          deleteVisible = true;
          onClickEdit && onClickEdit(e);
        }}
        size={size || "1x"}
      />

      {children}
      <FontAwesomeIcon
        icon={faTrashAlt}
        className={deleteVisible ? "delete-icon visible" : "delete-icon"}
        onClick={onClickDel}
        size={size || "1x"}
      />
    </>
  );
};

export default EditButtons;
