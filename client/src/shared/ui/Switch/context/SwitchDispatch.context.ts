import {createContext, Dispatch} from "react";
import {SwitchAction} from "@/shared/ui/Switch/type";

export const SwitchDispatchContext = createContext<Dispatch<SwitchAction>>(() => {console.log('switch default action')})