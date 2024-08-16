import {FC, lazy} from "react";
import IndevPage from "@/pages/IndevPage/IndevPage";

export const IndevPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    setTimeout(() => res(import('./IndevPage')), 100)
}))