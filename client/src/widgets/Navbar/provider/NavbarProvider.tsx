import { NavbarContext } from "@/widgets/Navbar/context/Navbar.context";
import { NavbarDispatchContext } from "@/widgets/Navbar/context/NavbarDispatch.context";
import { navbarReducer } from "@/widgets/Navbar/reducer/Navbar.reducer";
import { FC, ReactNode, useReducer } from 'react';

interface NavbarProviderProps {
    children?: ReactNode,
    isOpen?: boolean,
}

export const NavbarProvider: FC<NavbarProviderProps> = ({
    children, isOpen = false
}) => {
    const [navbar, dispatch] = useReducer(navbarReducer, { isOpen })

    return (
        <NavbarContext.Provider value={navbar}>
            <NavbarDispatchContext.Provider value={dispatch}>
                {children}
            </NavbarDispatchContext.Provider>
        </NavbarContext.Provider>
    );
};
