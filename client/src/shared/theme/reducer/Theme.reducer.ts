import {Theme, ThemeAction, ThemeActionsType, ThemeState} from "@/shared/theme/types";


export type ThemeReducer = (state: ThemeState, action: ThemeAction) => ThemeState

export const themeReducer: ThemeReducer = (state, action) => {
    const {type, payload} = action
    const theme = state.theme;
    switch (type) {
        case ThemeActionsType.SetDark: {
            return {
                ...state,
                theme: Theme.Dark
            }
        }
        case ThemeActionsType.SetLight: {
            return {
                ...state,
                theme: Theme.Light
            }
        }
        case ThemeActionsType.Switch: {
            if (theme === Theme.Dark) return {
                ...state,
                theme: Theme.Light
            };
            return {
                ...state,
                theme: Theme.Dark
            }
        }
        default: return state;
    }
}