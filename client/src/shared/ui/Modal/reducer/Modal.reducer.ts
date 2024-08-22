import { ModalAction, ModalActionType } from "../types";

type ModalReducer = (state: boolean, action: ModalAction) => boolean

export const modalReducer: ModalReducer = (state, action) => {
    const { type } = action
    switch (type) {
        case ModalActionType.Open:
            return true;
        case ModalActionType.Close:
            return false;
        case ModalActionType.Switch:
            return !state;
        default: return state;
    }
}