/* eslint-disable react/display-name */
import { DropdownProvider } from "@/shared/ui/Dropdown/provider/Dropdown.provider";
import { Typo } from "@/shared/ui/Typo/Typo";
import { StoryFn } from "@storybook/react";
import classNames from "classnames";

export const withDropdown = (isOpen: boolean) => (Story: StoryFn) => {
    return <DropdownProvider isOpen={isOpen}>
        <Story />
        <div className={classNames('text-white')}><Typo.H2>Another content</Typo.H2></div>
    </DropdownProvider>
}