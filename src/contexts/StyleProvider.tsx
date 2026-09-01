import React from "react";
import { StyleContext } from "./StyleContext";
import { StyleProviderProps } from "../types/StyleContextType";

export const StyleProvider: React.FC<StyleProviderProps> = ({ children, value }) => (
    <StyleContext.Provider value={value}>
        {children}
    </StyleContext.Provider>
);