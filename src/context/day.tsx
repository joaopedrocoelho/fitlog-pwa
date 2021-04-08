import React from "react";

export interface DayBeingEditedInt {
  dayEdit: string;
  setDay: (day: string) => void;
}

export const DayBeingEditedDefault: DayBeingEditedInt = {
  dayEdit: "Day 1",
  setDay: (day: string): void => {},
};

const DayBeingEdited = React.createContext<DayBeingEditedInt>(
  DayBeingEditedDefault
);

export default DayBeingEdited;
