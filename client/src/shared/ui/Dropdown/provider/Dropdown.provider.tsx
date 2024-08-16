import { FC, ReactNode, useReducer } from 'react';
import { DropdownContext } from '../context/Dropdown.context';
import { DropdownDispatchContext } from '../context/DropdownDispatch.context';
import { dropdownReducer } from "../reducer/Dropdown.reducer";

interface DropdownProviderProps {
    isOpen?: boolean,
    children: ReactNode,
}

export const DropdownProvider: FC<DropdownProviderProps> = ({
    isOpen = false,
    children,
}) => {
    const [dropdown, dispatch] = useReducer(dropdownReducer, { isOpen })
    return (
        <DropdownContext.Provider value={dropdown}>
            <DropdownDispatchContext.Provider value={dispatch}>
                {children}
            </DropdownDispatchContext.Provider>
        </DropdownContext.Provider>
    );
};
