import React, {ReactNode, FC} from 'react';
import classNames from "classnames";
import cls from './Shine.module.scss'

interface ShineProps {
    className?: string,
}

export const Shine: FC<ShineProps> = ({
                                          className,
                                          ...props
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
