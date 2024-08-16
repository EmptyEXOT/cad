import { pipesReducer } from "@/entity/Pipes";
import { unitsReducer } from "@/entity/Units/index";
import { $api } from "@/shared/api/api";
import { configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from "axios";

export const store = configureStore({
    reducer: {
        units: unitsReducer,
        pipes: pipesReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                api: $api
            }
        }
    })
})

export interface ThunkExtraArgs {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArgs
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
