import {createContext, Dispatch} from "react";
import { DropdownAction } from "../types";

export const DropdownDispatchContext =
    createContext<Dispatch<DropdownAction>>(() => {});