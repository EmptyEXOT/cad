import {useContext} from "react";
import {ThemeContext} from "@/shared/theme/context/Theme.context";
import {ThemeState} from "@/shared/theme/types";

type TUseTheme = () => ThemeState

export const useTheme: TUseTheme = () => {
    return useContext<ThemeState>(ThemeContext);
}