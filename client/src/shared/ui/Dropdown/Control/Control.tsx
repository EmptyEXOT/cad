import React, {FC} from 'react';
import OpenIcon from '../../../assets/openIcon.svg';
import cls from './Control.module.scss';
import classNames from "classnames";
import {useDropdown} from "@/shared/ui/Dropdown/hooks/useDropdown";
import {useDropdownDispatch} from "@/shared/ui/Dropdown/hooks/useDropdownDispatch";
import {DropdownActionType} from "@/shared/ui/Dropdown/types";

export interface ControlProps {
}

export const Control: FC<ControlProps> = ({
                                              ...props
                                          }) => {
    const {isOpen} = useDropdown()
    const dispatch = useDropdownDispatch();

    const switchIsOpen = () => {
        dispatch({type: DropdownActionType.Switch})
    }

    return (
        <button
            onClick={switchIsOpen}
            className={classNames(
                cls.control,
                isOpen && cls.open,
            )}>
            <OpenIcon/>
        </button>
    );
};
