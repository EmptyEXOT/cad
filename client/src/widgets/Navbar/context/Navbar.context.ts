import {createContext, Dispatch} from "react";
import {NavbarState} from "@/widgets/Navbar/types";

export const NavbarContext =
    createContext<NavbarState>({isOpen: false})

