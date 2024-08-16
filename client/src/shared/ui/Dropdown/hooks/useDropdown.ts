import {useContext} from "react";
import { DropdownContext } from "../context/Dropdown.context";
import { DropdownState } from "../types";

export const useDropdown = (): DropdownState => {
    return useContext<DropdownState>(DropdownContext)
}