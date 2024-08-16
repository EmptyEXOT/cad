import React from "react";
import {StoryFn} from "@storybook/react";
import {Theme} from "@/shared/theme/types";
import {ThemeProvider} from "@/shared/theme/ThemeProvider";
import classNames from "classnames";

export const withTheme = (theme: Theme) => (Story: StoryFn) => {
    return <ThemeProvider defaultTheme={theme}>
        <Story />
    </ThemeProvider>
}