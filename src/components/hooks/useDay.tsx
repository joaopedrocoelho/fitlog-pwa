import React from "react";
import { DayBeingEditedInt } from "../../context/day";

export const useDay = (): DayBeingEditedInt => {
  const [dayEdit, setCurrentDay] = React.useState<string>("");

  const setDay = React.useCallback((dayName: string): void => {
    setCurrentDay(dayName);
  }, []);

  return {
    dayEdit,
    setDay,
  };
};
