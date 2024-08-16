import React, {FC, ReactNode, useReducer} from 'react';
import {dropdownReducer} from "../reducer/Dropdown.reducer";
import {DropdownContext } from '../context/Dropdown.context';
import { DropdownDispatchContext } from '../context/DropdownDispatch.context';

interface DropdownProviderProps {
    isOpen?: boolean,
    children: ReactNode,
}

export const DropdownProvider: FC<DropdownProviderProps> = ({
                                                         isOpen = false,
                                                         children,
                                                         ...props
                                                     }) => {
    const [dropdown, dispatch] = useReducer(dropdownReducer, {isOpen})
    return (
        <DropdownContext.Provider value={dropdown}>
            <DropdownDispatchContext.Provider value={dispatch}>
                {children}
            </DropdownDispatchContext.Provider>
        </DropdownContext.Provider>
    );
};
