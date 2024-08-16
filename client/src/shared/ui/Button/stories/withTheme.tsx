/* eslint-disable react/display-name */
import { ThemeProvider } from "@/shared/theme/ThemeProvider";
import { Theme } from "@/shared/theme/types";
import { StoryFn } from "@storybook/react";

export const withTheme = (theme: Theme) => (Story: StoryFn) => {
    return <ThemeProvider defaultTheme={theme}>
        <Story />
    </ThemeProvider>
}