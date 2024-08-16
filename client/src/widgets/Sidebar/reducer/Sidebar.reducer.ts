import {SidebarAction, SidebarActionType, SidebarState} from "@/widgets/Sidebar/types";

export type TSidebarReducer = (state: SidebarState, action: SidebarAction) => SidebarState;

export const sidebarReducer: TSidebarReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case SidebarActionType.Open:
            return {
                ...state,
                isOpen: true,
            };
        case SidebarActionType.Close:
            return {
                ...state,
                isOpen: false,
            };
        case SidebarActionType.SwitchIsOpen:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        case SidebarActionType.ClearModules:
            return {
                ...state,
                modules: [],
            };
        case SidebarActionType.SetModules:
            return {
                ...state,
                // modules: payload?.modules || [Modules.Alphabet]
            };
        default: return state;
    }
}