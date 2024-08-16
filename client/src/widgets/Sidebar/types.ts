import {ModuleType} from "@/widgets/Module/types/Modules";

export interface SidebarState {
    isOpen: boolean,
    modules: ModuleType[]
}

export enum SidebarActionType {
    SwitchIsOpen = 'SwitchIsOpen',
    Open = 'Open',
    Close = 'close',
    ClearModules = 'ClearModules',
    SetModules = 'SetModules',
}

export interface SidebarAction {
    type: SidebarActionType,
    payload?: Partial<SidebarState>,
}