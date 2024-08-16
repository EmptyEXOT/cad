import { NavbarState } from "@/widgets/Navbar/types";
import { createContext } from "react";

export const NavbarContext =
    createContext<NavbarState>({isOpen: false})

