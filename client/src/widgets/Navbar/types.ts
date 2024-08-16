export interface NavbarState {
    isOpen: boolean,
}

export enum NavbarActionType {
    Open = 'open',
    Close = 'close',
    Switch = 'switch',
}

export interface NavbarAction {
    type: NavbarActionType,
    payload?: Partial<NavbarState>
}