import {createContext, Dispatch} from "react";
import {SidebarAction} from "@/widgets/Sidebar/types";

export const SidebarDispatchContext =
    createContext<Dispatch<SidebarAction>>(() => {
        console.log('sidebar dispatcher init error')
    })