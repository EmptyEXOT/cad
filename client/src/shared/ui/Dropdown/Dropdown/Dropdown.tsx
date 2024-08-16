import React, {ReactNode} from 'react';
import classNames from "classnames";
import {DropdownComponent} from '../types';
import {Control} from '../Control/Control';
import {useDropdown} from '../hooks/useDropdown';
import cls from './Dropdown.module.scss';

export interface DropdownProps {
    title: ReactNode,
    control: ReactNode,
    children: ReactNode,
}

export const Dropdown: DropdownComponent = ({
                                                control,
                                                title,
                                                children,
                                                ...props
                                            }) => {
    const {isOpen} = useDropdown()

    return (
        <div className={classNames('')}>
            <div className={classNames('flex')}>
                {title}
                {control}
            </div>
            <div className={classNames(
                cls.children,
                'pl-4',
                isOpen && cls.open
            )}>
                {children}
            </div>
        </div>
    );
};

Dropdown.Control = Control;
