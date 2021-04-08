import React from "react";
import { Add } from "../../context/add";

export const useAdd = (): Add => {
  const [defaultObj, setDefaultObj] = React.useState<Record<string, any>>({});

  const setAdd = React.useCallback((p: object): void => {
    setDefaultObj(p);
  }, []);

  return {
    defaultObj,
    setAdd,
  };
};
