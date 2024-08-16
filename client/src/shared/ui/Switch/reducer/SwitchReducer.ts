import {SwitchAction, SwitchActionType} from "@/shared/ui/Switch/type";

type TSwitchReducer = (state: boolean, action: SwitchAction) => boolean

export const switchReducer: TSwitchReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case SwitchActionType.Switch:
            return !state;
        case SwitchActionType.On: return true;
        case SwitchActionType.Off: return false;
        default: return state;
    }
}