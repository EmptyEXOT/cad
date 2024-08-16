import {createRoot} from "react-dom/client";
import React from "react";
import {ThemeProvider} from "@/shared/theme/ThemeProvider";
import {StoreProvider} from "@/shared/store/StoreProvider";
import {RouterProvider} from "react-router-dom";
import {router} from "@/shared/router/router";
import {Theme} from "@/shared/theme/types";

const container = document.getElementById('root');

if (!container) throw new Error('div with id "root" doesnt exist');

const root = createRoot(container)

root.render(<ThemeProvider defaultTheme={Theme.Light}>
    <StoreProvider>
        <RouterProvider router={router}/>
    </StoreProvider>
</ThemeProvider>)