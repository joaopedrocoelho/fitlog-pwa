import React from "react";
import ProgramExercises from "./program-exercises";

interface Props {
  name: string;
  data: object;
}

const ProgramPart: React.FC<Props> = ({ name, data }) => {
  const types = Object.entries(data);

  return (
    <div className="ProgramPart">
      <h2>{name}</h2>

      {types.map(([name, exercises], index) => (
        <ProgramExercises name={name} exercises={exercises} key={index} />
      ))}
    </div>
  );
};

export default ProgramPart;
