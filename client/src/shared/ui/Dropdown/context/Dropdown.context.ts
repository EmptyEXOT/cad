import {createContext} from "react";
import {DropdownState} from "../types";



export const DropdownContext = createContext<DropdownState>({isOpen: false})