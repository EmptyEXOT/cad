import { SwitchDispatchContext } from "@/shared/ui/Switch/context/SwitchDispatch.context";
import { switchReducer } from "@/shared/ui/Switch/reducer/SwitchReducer";
import { FC, ReactNode, useReducer } from 'react';
import { SwitchContext } from '../context/Switch.context';

interface SwitchProviderProps {
    children?: ReactNode,
    isOnDefault?: boolean,
}

export const SwitchProvider: FC<SwitchProviderProps> = ({
    children,
    isOnDefault = false,
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
