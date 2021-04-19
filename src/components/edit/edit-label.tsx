import React, { useEffect, useState } from "react";
import "./edit.css";

import EditButtons from "./edit-buttons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  labelText: string;
  editElement: (name: string) => void;
  deleteElement?: (name: string) => void; //change to required
  onInputClick?: (e: React.MouseEvent) => void;
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

const EditLabel: React.FC<Props> = ({
  labelText,
  editElement,
  deleteElement,
  size,
  onInputClick,
}) => {
  const label = React.useRef<HTMLInputElement>(null);
  const editArea = React.useRef<HTMLSpanElement>(null);
  const [labelvalue, setValue] = useState(labelText);
  const [oldvalue] = useState<string>(labelText);

  const CancelSize = () => {
    if (size === "2x") {
      return "lg";
    } else if (size === "lg") {
      return "sm";
    } else return "xs";
  };

  const [editable, setEditable] = useState(false);

  const clickListener = (e: MouseEvent) => {
    if (editArea.current?.contains(e.target as Node) === false) {
      setEditable(false);
    }
  };

  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener("click", clickListener);

    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);

  useEffect(() => {
    if (label.current && editable) {
      label.current.focus();
    }
  }, [editable]);

  return (
    <span className={"edit-buttons"} ref={editArea}>
      <EditButtons
        onClickEdit={(e) => {
          /* e.stopPropagation(); */
          setEditable(true);
          console.log("editable", editable);
        }}
        onClickDel={deleteElement}
        size={size}
        deleteVisible={editable}
      >
        <input
          className={"editable-label"}
          style={{ width: `${labelvalue.length}em` }}
          ref={label}
          onChange={(e) => {
            setValue((e.target as HTMLInputElement).value);
          }}
          value={labelvalue}
          disabled={!editable}
        />

        <FontAwesomeIcon
          icon={faTimesCircle}
          color={"var(--light-red)"}
          size={size}
          className={editable ? "visible" : "hidden"}
          onClick={(e) => {
            /* e.stopPropagation(); */
            setValue(oldvalue);
            setEditable(!editable);
          }}
        />
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={editable ? "check-edit visible" : "check-edit"}
          onClick={(e) => {
            /* e.stopPropagation(); */
            editElement(labelvalue);
            setEditable(false);
          }}
          size={size}
        />
      </EditButtons>
    </span>
  );
};

export default EditLabel;
