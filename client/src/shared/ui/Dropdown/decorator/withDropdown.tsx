import React from "react";
import {StoryFn} from "@storybook/react";
import {DropdownProvider} from "@/shared/ui/Dropdown/provider/Dropdown.provider";
import classNames from "classnames";
import {Typo} from "@/shared/ui/Typo/Typo";

export const withDropdown = (isOpen: boolean) => (Story: StoryFn) => {
    return <DropdownProvider isOpen={isOpen}>
        <Story />
        <div className={classNames('text-white')}><Typo.H2>Another content</Typo.H2></div>
    </DropdownProvider>
}