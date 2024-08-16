export enum SwitchActionType {
    Switch = 'Switch',
    On = 'On',
    Off = 'Off',
}

export interface SwitchAction {
    type: SwitchActionType,
    payload?: boolean,
}