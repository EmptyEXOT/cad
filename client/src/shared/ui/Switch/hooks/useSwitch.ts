import {useContext} from "react";
import {SwitchContext} from "@/shared/ui/Switch/context/Switch.context";

type TUseSwitch = () => boolean

export const useSwitch: TUseSwitch = () => {
    return useContext<boolean>(SwitchContext);
}