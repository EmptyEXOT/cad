import React, {FC, ReactNode} from 'react';
import {store} from "@/shared/store/store";
import {Provider} from "react-redux";

interface StoreProviderProps {
    children?: ReactNode,
    // initialState?: StateSchema,
}

export const StoreProvider: FC<StoreProviderProps> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
