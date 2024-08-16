import {Meta, StoryObj} from '@storybook/react'
import {Navbar} from "../ui/Navbar";
import React from "react";
import {withRouter} from "storybook-addon-remix-react-router";
import {NavbarProvider} from "@/widgets/Navbar/provider/NavbarProvider";
import '@/root/global.scss'
import '@/root/tailwind.scss'
import {withNavbar} from "@/widgets/Navbar/story/withNavbar";


const meta: Meta<typeof Navbar> = {
    title: 'Widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
        viewport: {defaultViewport: 'iphone12',}
    },
    decorators: [
        withRouter,
        (Story, context) =>
            <div>
                <NavbarProvider>
                    <Story/>
                </NavbarProvider>
            </div>
    ]
} satisfies Meta<typeof Navbar>


type Story = StoryObj<typeof Navbar>
export default meta


export const Close: Story = {
    args: {},
    decorators: [
        withNavbar(false)
    ]
}

export const Open: Story = {
    args: {},
    decorators: [
        withNavbar(true)
    ]
}