import React, {ReactNode, FC, useReducer} from 'react';
import {switchReducer} from "@/shared/ui/Switch/reducer/SwitchReducer";
import { SwitchContext } from '../context/Switch.context';
import {SwitchDispatchContext} from "@/shared/ui/Switch/context/SwitchDispatch.context";

interface SwitchProviderProps {
    children?: ReactNode,
    isOnDefault?: boolean,
}

export const SwitchProvider: FC<SwitchProviderProps> = ({
                                                            children,
                                                            isOnDefault = false,
                                                            ...props
                                                        }) => {
    const [state, reducer] = useReducer(switchReducer, isOnDefault)

    return (
        <SwitchContext.Provider value={state}>
            <SwitchDispatchContext.Provider value={reducer}>
                {children}
            </SwitchDispatchContext.Provider>
        </SwitchContext.Provider>
    );
};
