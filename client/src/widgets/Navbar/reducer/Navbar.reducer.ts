import {NavbarAction, NavbarActionType, NavbarState} from "@/widgets/Navbar/types";

export type TNavbarReducer = (state: NavbarState, action: NavbarAction) => NavbarState;

export const navbarReducer: TNavbarReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case NavbarActionType.Open:
            return {
                isOpen: true,
            };
        case NavbarActionType.Close:
            return {
                isOpen: false,
            }
        case NavbarActionType.Switch:
            return {
                isOpen: !state.isOpen
            }
        default:
            return state;
    }
}