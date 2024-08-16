export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

export interface ThemeState {
    theme: Theme,
}

export enum ThemeActionsType {
    Switch = 'switch',
    SetDark = 'set_dark',
    SetLight = 'set_light',
}

export interface ThemeAction {
    type: ThemeActionsType,
    payload?: Partial<ThemeState>
}