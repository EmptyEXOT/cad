import {createContext, Dispatch} from "react";
import {NavbarAction} from "@/widgets/Navbar/types";

export const NavbarDispatchContext =
    createContext<Dispatch<NavbarAction>>(() => {console.log('err')})