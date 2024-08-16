import {createContext} from "react";
import {SidebarState} from "@/widgets/Sidebar/types";

export const SidebarContext =
    createContext<SidebarState>(
        {
            isOpen: false,
            modules: []
        }
    )