import React, { useContext } from "react";

import ProgramContext from "../context/program";

import ProgramDay from "./program/program-day";

const ViewProgram: React.FC = () => {
  const { days } = useContext(ProgramContext);

  return (
    <section className="Program">
      {days &&
        days.map(([name, data], index: number) => {
          return <ProgramDay data={data} key={index} />;
        })}
    </section>
  );
};

export default ViewProgram;
