export enum ModalActionType {
    Open = 'open',
    Close = 'close',
    Switch = 'switch',
}

export interface ModalAction {
    type: ModalActionType,
    payload?: boolean,
}