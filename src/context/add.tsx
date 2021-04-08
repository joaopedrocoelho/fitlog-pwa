import React from "react";

export interface Add {
  defaultObj: Record<string, any> | undefined;
  setAdd: (o: object) => void;
}

export const addContextDefault: Add = {
  defaultObj: undefined,
  setAdd: (o: object): void => {},
};

const SetAdd = React.createContext<Add>(addContextDefault);

export default SetAdd;
