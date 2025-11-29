import { createContext } from "react";
import type { ThemeContextInterface } from "../types/Theme";

export const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);