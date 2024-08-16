import {createContext} from "react";
import {Theme, ThemeState} from "../types";

export const ThemeContext = createContext<ThemeState>({theme: Theme.Dark});
