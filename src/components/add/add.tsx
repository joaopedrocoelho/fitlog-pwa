import React, { useState, useRef, useEffect } from "react";
import "./add.css";
import AddButton from "./add-button";

interface Props {
  defaultValue: string;
  label?: string;
  buttonLabel?: string;
  callback?: (p?: string) => void;
}

const Add: React.FC<Props> = ({
  defaultValue,
  label,
  buttonLabel,
  callback,
}) => {
  const [value, setValue] = useState<string>(defaultValue);
  const labelRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (labelRef.current) {
      labelRef.current.focus();
    }
  });

  return (
    <section className="add-day">
      <label htmlFor={"day-name"}>
        <h2 className={"add-header"}>{label ? label : "Name"}</h2>
      </label>
      <input
        type="text"
        value={value}
        className={"add-label"}
        name="day-name"
        contentEditable={true}
        ref={labelRef}
        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <AddButton
        caption={buttonLabel || ""}
        callback={() => {
          callback && callback(value);
        }}
      />
    </section>
  );
};

export default Add;
