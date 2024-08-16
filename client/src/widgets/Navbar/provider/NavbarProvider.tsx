import React, {FC, ReactNode, useReducer} from 'react';
import {NavbarContext} from "@/widgets/Navbar/context/Navbar.context";
import {navbarReducer} from "@/widgets/Navbar/reducer/Navbar.reducer";
import {NavbarDispatchContext} from "@/widgets/Navbar/context/NavbarDispatch.context";

interface NavbarProviderProps {
    children?: ReactNode,
    isOpen?: boolean,
}

export const NavbarProvider: FC<NavbarProviderProps> = ({children, isOpen = false, ...props}) => {
    const [navbar, dispatch] = useReducer(navbarReducer, {isOpen})

    return (
        <NavbarContext.Provider value={navbar}>
            <NavbarDispatchContext.Provider value={dispatch}>
                {children}
            </NavbarDispatchContext.Provider>
        </NavbarContext.Provider>
    );
};
