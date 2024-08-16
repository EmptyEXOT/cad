import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {Header} from './Header';
import {Description} from "./Description";
import {AboutStatsSvg} from "./AboutStatsSVG";

interface ProgressBlockProps {
    children?: ReactNode,
}

export const ProgressBlock: FC<ProgressBlockProps> = ({
                                                          children,
                                                          ...props
                                                      }) => {
    return (
        <div className={classNames(
            'h-fit flex flex-col gap-6 bg-secondary-dark py-8 border border-solid border-neutral-650 rounded-lg mb-12',
            'md:mb-0',
        )}>
            <Header />
            <div className={classNames('relative w-full')}>
                <AboutStatsSvg/>
            </div>
            <Description />
        </div>
    );
};
