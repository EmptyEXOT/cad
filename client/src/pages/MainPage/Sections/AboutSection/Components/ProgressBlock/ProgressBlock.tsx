import classNames from "classnames";
import { FC, ReactNode } from 'react';
import { AboutStatsSvg } from "./AboutStatsSVG";
import { Description } from "./Description";
import { Header } from './Header';

interface ProgressBlockProps {
    children?: ReactNode,
}

export const ProgressBlock: FC<ProgressBlockProps> = () => {
    return (
        <div className={classNames(
            'h-fit flex flex-col gap-6 bg-secondary-dark py-8 border border-solid border-neutral-650 rounded-lg mb-12',
            'md:mb-0',
        )}>
            <Header />
            <div className={classNames('relative w-full')}>
                <AboutStatsSvg />
            </div>
            <Description />
        </div>
    );
};
