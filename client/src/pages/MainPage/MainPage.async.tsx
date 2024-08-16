import {lazy} from "react";

export const MainPageAsync = lazy(
    () => new Promise((res) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setTimeout(() => res(import('./MainPage')), 100);
    }),
)
