import React, { useState, useContext } from "react";

interface Props {
  name: string;
  exercises: string[];
}

const ProgramExercises: React.FC<Props> = ({ name, exercises }) => {
  const [exerciseList, setExerciseList] = useState<string[]>(exercises);

  return (
    <div className="ProgramExercises">
      <h5>{name}</h5>

      <ul className="exercises">
        {exerciseList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramExercises;
