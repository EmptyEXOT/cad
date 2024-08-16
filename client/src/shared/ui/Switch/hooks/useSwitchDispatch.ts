import {Dispatch, useContext} from "react";
import {SwitchAction} from "@/shared/ui/Switch/type";
import {SwitchDispatchContext} from "@/shared/ui/Switch/context/SwitchDispatch.context";

type TUseSwitchDispatch = () => Dispatch<SwitchAction>

export const useSwitchDispatch: TUseSwitchDispatch = () => {
    return useContext<Dispatch<SwitchAction>>(SwitchDispatchContext)
}