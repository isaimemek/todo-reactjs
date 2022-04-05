import { createContext, useState } from "react";

const SelectionContext = createContext("");

export const Selection = ({ children }) => {
  const [isSelected, setIsSelected] = useState("all");

  const values = {
    isSelected,
    setIsSelected,
  };
  return (
    <SelectionContext.Provider value={values}>
      {children}
    </SelectionContext.Provider>
  );
};

export default SelectionContext;
