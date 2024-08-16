import React, {FC} from 'react';
import {useSidebar} from "@/widgets/Sidebar/hooks/useSidebar";
import {useAppDispatch} from "@/shared/store/hooks";

interface SidebarProps {
    // children: ReactNode,
}

export const Sidebar: FC<SidebarProps> = ({
                                              ...props
                                          }) => {
    const {modules, isOpen} = useSidebar()
    const dispatch = useAppDispatch();

    return (
        <div>
        </div>
    );
};
