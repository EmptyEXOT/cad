import { FC, ReactNode, useReducer } from 'react';
import { ModalContext } from '../context/Modal.context';
import { ModalDispatchContext } from '../context/ModalDispatch.context';
import { modalReducer } from '../reducer/Modal.reducer';

interface ModalProviderProps {
    isModalOpenDefault?: boolean,
    children: ReactNode,
}

export const ModalProvider: FC<ModalProviderProps> = ({
                                        children,
                                        isModalOpenDefault = false,
                                    }) => {
    const [state, reducer] = useReducer(modalReducer, isModalOpenDefault)
    return (
        <ModalContext.Provider value={state}>
            <ModalDispatchContext.Provider value={reducer}>
                {children}
            </ModalDispatchContext.Provider>
        </ModalContext.Provider>
    );
};