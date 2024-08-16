import {DropdownActionType, TDropdownReducer} from "../types";

export const dropdownReducer: TDropdownReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case DropdownActionType.Open:
            return {
                isOpen: true,
            };
        case DropdownActionType.Close:
            return {
                isOpen: false,
            }
        case DropdownActionType.Switch:
            return {
                isOpen: !state.isOpen
            }
        default:
            return state;
    }
}