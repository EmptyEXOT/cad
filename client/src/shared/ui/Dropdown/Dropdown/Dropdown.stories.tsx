import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Dropdown} from "@/shared/ui/Dropdown/Dropdown/Dropdown";
import {Typo} from "@/shared/ui/Typo/Typo";
import {withDropdown} from "@/shared/ui/Dropdown/decorator/withDropdown";

const meta: Meta<typeof Dropdown> = {
    title: 'Shared/Dropdown',
    component: Dropdown,
} satisfies Meta<typeof Dropdown>

export default meta;
type Story = StoryObj<typeof Dropdown>

export const Close: Story = {
    args: {
        title: <Typo.H2>Dropdown</Typo.H2>,
        control: <Dropdown.Control />,
        children: <>
            <p>smth 1</p>
            <p>smth 2</p>
            <p>smth 3</p>
        </>
    },
    decorators: [
        withDropdown(false)
    ]
}

export const Open: Story = {
    args: {
        title: <Typo.H2>Dropdown</Typo.H2>,
        control: <Dropdown.Control />,
        children: <>
            <Typo.H3>smth 1</Typo.H3>
            <Typo.H3>smth 2</Typo.H3>
            <Typo.H3>smth 3</Typo.H3>
        </>
    },
    decorators: [
        withDropdown(true)
    ]
}
