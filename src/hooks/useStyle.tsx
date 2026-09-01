import { useContext } from "react";
import { StyleContext } from "../contexts/StyleContext";
import { StyleContextType } from "../types/StyleContextType";

export const useStyle = (): StyleContextType => {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error("useStyle must be used within a StyleProvider");
  }
  return context;
};