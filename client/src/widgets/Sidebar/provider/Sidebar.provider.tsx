import React, {FC, ReactNode, useReducer} from 'react';
import {SidebarContext} from "@/widgets/Sidebar/context/Sidebar.context";
import {ModuleType} from "@/widgets/Module/types/Modules";
import {sidebarReducer} from "@/widgets/Sidebar/reducer/Sidebar.reducer";
import {SidebarDispatchContext} from "@/widgets/Sidebar/context/SidebarDispatch.context";

interface SidebarProviderProps {
    isOpenDefault?: boolean,
    modulesDefault?: ModuleType[],
    children?: ReactNode,
}

export const SidebarProvider: FC<SidebarProviderProps> = ({
                                                              isOpenDefault = false,
                                                              modulesDefault = [],
                                                              children,
                                                              ...props
                                                          }) => {
    const [sidebar, dispatch] = useReducer(sidebarReducer, {isOpen: isOpenDefault, modules: modulesDefault})

    return (
        <SidebarContext.Provider value={sidebar}>
            <SidebarDispatchContext.Provider value={dispatch}>
                {children}
            </SidebarDispatchContext.Provider>
        </SidebarContext.Provider>
    );
};
