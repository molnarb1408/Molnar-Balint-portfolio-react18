import React, { createContext, useContext } from "react";
import { StyleContextType, StyleProviderProps } from "../types/StyleContextType";

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export const StyleProvider: React.FC<StyleProviderProps> = ({ children, value }) => (
  <StyleContext.Provider value={value}>
    {children}
  </StyleContext.Provider>
);

export const useStyle = (): StyleContextType => {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error("useStyle must be used within a StyleProvider");
  }
  return context;
};

export default StyleContext;
