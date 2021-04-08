import React from "react";
import { SectionContextInt } from "../../context/section";

export const useSection = (): SectionContextInt => {
  const [section, setNewSection] = React.useState<string>("");

  const setSection = React.useCallback((Section: string): void => {
    setNewSection(Section);
  }, []);

  return {
    section,
    setSection,
  };
};
