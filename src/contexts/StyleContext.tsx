import { createContext } from "react";
import { StyleContextType } from "../types/StyleContextType";

export const StyleContext = createContext<StyleContextType | undefined>(undefined);