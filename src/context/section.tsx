import React from "react";

export interface SectionContextInt {
  section: string;
  setSection: (Section: string) => void;
}

const SectionContextDefault: SectionContextInt = {
  section: "Biceps",
  setSection: (Section: string): void => {},
};

const SectionContext = React.createContext<SectionContextInt>(
  SectionContextDefault
);

export default SectionContext;
