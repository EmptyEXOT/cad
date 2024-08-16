import {Dispatch, useContext} from "react";
import {ThemeAction} from "@/shared/theme/types";
import {ThemeDispatchContext} from "@/shared/theme/context/ThemeDispatchContext";

export type TUseThemeDispatch = () => Dispatch<ThemeAction>

export const useThemeDispatch: TUseThemeDispatch = () => {
    return useContext<Dispatch<ThemeAction>>(ThemeDispatchContext)
}