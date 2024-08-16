import classNames from "classnames";
import { FC } from 'react';
import cls from './Shine.module.scss';

interface ShineProps {
    className?: string,
}

export const Shine: FC<ShineProps> = ({
    className,
}) => {
    return (
        <div
            className={classNames(
                cls.shine,
                className
            )}>
        </div>
    );
};
