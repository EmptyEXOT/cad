import {FC} from "react";
import {DropdownProps} from "./Dropdown/Dropdown";
import {ControlProps} from "./Control/Control";

export type DropdownComponent = FC<DropdownProps> & {
    Control: FC<ControlProps>
}

export enum DropdownActionType {
    Open = 'open',
    Close = 'close',
    Switch = 'switch',
}

export interface DropdownAction {
    type: DropdownActionType,
    payload?: Partial<DropdownState>
}

export type TDropdownReducer = (state: DropdownState, action: DropdownAction) => DropdownState

export interface DropdownState {
    isOpen: boolean,
}