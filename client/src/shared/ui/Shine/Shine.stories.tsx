import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Shine} from "@/shared/ui/Shine/Shine";
import classNames from "classnames";

const meta: Meta<typeof Shine> = {
    title: 'Shared/Shine',
    component: Shine,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Shine>

export default meta;

type Story = StoryObj<typeof Shine>

export const Default: Story = {
    args: {
        className: classNames('w-[300px] h-[100px] z-10'),
    },
    decorators: [
        (Story) => <div className={classNames('w-full h-screen flex items-center justify-center')}><Story /></div>
    ]
}