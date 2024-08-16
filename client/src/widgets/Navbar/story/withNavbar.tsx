import {NavbarProvider} from "@/widgets/Navbar/provider/NavbarProvider";
import React from "react";
import {StoryFn} from "@storybook/react";
export const withNavbar = (isOpen: boolean) => (Story: StoryFn) => {
    return <NavbarProvider isOpen={isOpen}>
        <Story />
    </NavbarProvider>
}