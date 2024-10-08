import { ThemeContext } from "@/shared/theme/context/Theme.context";
import { themeReducer } from "@/shared/theme/reducer/Theme.reducer";
import { Theme } from "@/shared/theme/types";
import { FC, ReactNode, useReducer } from 'react';
import { ThemeDispatchContext } from './context/ThemeDispatchContext';

interface ThemeProviderProps {
    children?: ReactNode,
    defaultTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    defaultTheme = Theme.Dark,
}) => {
    const [theme, dispatch] = useReducer(themeReducer, { theme: defaultTheme })

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    );
};
