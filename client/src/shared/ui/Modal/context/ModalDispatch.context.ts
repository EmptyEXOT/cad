import { createContext, Dispatch } from "react";
import { ModalAction } from "../types";

export const ModalDispatchContext = createContext<Dispatch<ModalAction>>(
    () => {console.log('modal init action')}
);