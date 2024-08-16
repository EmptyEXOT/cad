import {SidebarState} from "@/widgets/Sidebar/types";
import {useContext} from "react";
import {SidebarContext} from "@/widgets/Sidebar/context/Sidebar.context";

type TUseSidebar = () => SidebarState

export const useSidebar: TUseSidebar = () => {
    return useContext<SidebarState>(SidebarContext);
}