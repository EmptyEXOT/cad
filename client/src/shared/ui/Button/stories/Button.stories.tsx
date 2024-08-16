import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Button, ButtonVariant} from "../Button";
import {withTheme} from "./withTheme";
import {Theme} from "@/shared/theme/types";

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
    component: Button,
    args: {
        className: 'py-2 px-4'
    }
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>
export default meta;

export const PrimaryLight: Story = {
    args: {
        variant: ButtonVariant.Primary,
        children: 'Button'
    },
    parameters: {
        backgrounds: {default: 'custom-light'}
    },
    decorators: [withTheme(Theme.Light)]
}

export const SecondaryLight: Story = {
    args: {
        variant: ButtonVariant.Secondary,
        children: 'Button'
    },
    parameters: {
        backgrounds: {default: 'custom-light'}
    },
    decorators: [withTheme(Theme.Light)]
}

export const PrimaryDark: Story = {
    args: {
        variant: ButtonVariant.Primary,
        children: 'Button'
    },
    parameters: {
        backgrounds: {default: 'custom-dark'}
    },
    decorators: [withTheme(Theme.Dark)]
}

export const SecondaryDark: Story = {
    args: {
        variant: ButtonVariant.Secondary,
        children: 'Button'
    },
    parameters: {
        backgrounds: {default: 'custom-dark'}
    },
    decorators: [withTheme(Theme.Dark)]
}

export const PrimaryDarkBorder: Story = {
    args: {
        variant: ButtonVariant.Primary,
        children: 'Button',
        border: true,
    },
    parameters: {
        backgrounds: {default: 'custom-dark'}
    },
    decorators: [withTheme(Theme.Dark)]
}

export const PrimaryLightBorder: Story = {
    args: {
        variant: ButtonVariant.Primary,
        children: 'Button',
        border: true,
    },
    parameters: {
        backgrounds: {default: 'custom-light'}
    },
    decorators: [withTheme(Theme.Light)]
}

export const SecondaryLightBorder: Story = {
    args: {
        variant: ButtonVariant.Secondary,
        children: 'Button',
        border: true,
    },
    parameters: {
        backgrounds: {default: 'custom-light'}
    },
    decorators: [withTheme(Theme.Light)]
}

export const SecondaryDarkBorder: Story = {
    args: {
        variant: ButtonVariant.Secondary,
        children: 'Button',
        border: true,
    },
    parameters: {
        backgrounds: {default: 'custom-dark'}
    },
    decorators: [withTheme(Theme.Dark)]
}