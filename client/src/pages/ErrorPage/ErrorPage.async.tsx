import {lazy} from "react";

export const ErrorPageAsync = lazy(() => new Promise(res => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTimeout(() => res(import('./ErrorPage')), 1000)
}))