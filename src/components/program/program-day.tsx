import React from "react";
import ProgramPart from "./program-part";

interface Props {
  data: object;
}

const ProgramDay: React.FC<Props> = ({ data }) => {
  const parts = Object.entries(data);

  return (
    <div className="ProgramDay">
      {parts.map(([name, data], index) => (
        <ProgramPart name={name} data={data} key={index} />
      ))}
    </div>
  );
};

export default ProgramDay;
