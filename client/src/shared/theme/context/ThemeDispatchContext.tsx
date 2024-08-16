import {createContext, Dispatch} from "react";
import {ThemeAction} from "@/shared/theme/types";

export const ThemeDispatchContext =
    createContext<Dispatch<ThemeAction>>(
        () => {
            console.log('theme dispatch init error')
        }
    )