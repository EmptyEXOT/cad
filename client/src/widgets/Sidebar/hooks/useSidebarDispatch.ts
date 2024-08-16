import {Dispatch, useContext} from "react";
import {SidebarAction} from "@/widgets/Sidebar/types";
import {SidebarDispatchContext} from "@/widgets/Sidebar/context/SidebarDispatch.context";

type TUseSidebarDispatch = () => Dispatch<SidebarAction>

export const useSidebarDispatch: TUseSidebarDispatch = () => {
    return useContext<Dispatch<SidebarAction>>(SidebarDispatchContext);
}