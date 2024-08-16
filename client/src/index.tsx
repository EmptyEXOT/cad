import { router } from "@/shared/router/router";
import { StoreProvider } from "@/shared/store/StoreProvider";
import { ThemeProvider } from "@/shared/theme/ThemeProvider";
import { Theme } from "@/shared/theme/types";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

const container = document.getElementById('root');

if (!container) throw new Error('div with id "root" doesnt exist');

const root = createRoot(container)

root.render(<ThemeProvider defaultTheme={Theme.Light}>
    <StoreProvider>
        <RouterProvider router={router}/>
    </StoreProvider>
</ThemeProvider>)