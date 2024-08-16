import {Dispatch, useContext} from "react";
import {DropdownDispatchContext} from "../context/DropdownDispatch.context";
import {DropdownAction} from "../types";

export const useDropdownDispatch = (): Dispatch<DropdownAction> => {
    return useContext<Dispatch<DropdownAction>>(DropdownDispatchContext)
}