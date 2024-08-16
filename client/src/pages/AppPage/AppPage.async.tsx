import {lazy} from "react";

export const AppPageAsync = lazy(
    () => new Promise((res) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setTimeout(() => res(import('./AppPage')), 100);
    }),
)
