import React, {ReactNode} from 'react';
import './global.scss'
import {Outlet, ScrollRestoration} from "react-router-dom";
import {NavbarProvider} from "@/widgets/Navbar/provider/NavbarProvider";
import {Navbar} from "@/widgets/Navbar";

export const Root = ({children}: { children?: ReactNode }) => {
    return (
        <NavbarProvider>
            <Navbar/>
            {children}
            <Outlet/>
            <ScrollRestoration />
        </NavbarProvider>
    );
};
