import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  list: string[];
  func: () => void;
}

const CheckMark: React.FC<Props> = ({ list, func }) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <span
      className={
        checked ? "check-button-circle heartbeat" : "check-button-circle"
      }
      onClick={() => {
        setChecked(true);
        setTimeout(() => {
          func();
          setChecked(false);
        }, 1000);
      }}
    >
      <FontAwesomeIcon
        icon={faCheck}
        size="xs"
        className={checked ? "check-button-mark checked" : "check-button-mark"}
      />
    </span>
  );
};

export default CheckMark;
