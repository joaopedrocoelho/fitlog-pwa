import React from "react";
import EditProgramPart from "./edit-program-part";

interface Props {
  data: object;
  dayId: number;
  dayName: string;
}

const EditProgramDay: React.FC<Props> = ({ data, dayId, dayName }) => {
  const parts = Object.entries(data);

  return (
    <div className="ProgramDay">
      {parts.map(([name, data], index) => {
        return (
          <>
            <EditProgramPart
              name={name}
              data={data}
              dayId={dayId}
              dayName={dayName}
              muscleId={index}
              key={`${name}-${index}`}
            />
          </>
        );
      })}
    </div>
  );
};

export default EditProgramDay;
