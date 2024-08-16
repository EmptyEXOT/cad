import { lazy } from "react";

export const IndevPageAsync = lazy(() => new Promise(res => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTimeout(() => res(import('./IndevPage')), 100)
}))