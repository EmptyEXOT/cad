import classNames from "classnames";
import { FC, ReactNode } from 'react';
import cls from "./Burger.module.scss";

interface BurgerProps {
    children?: ReactNode
    className?: string | undefined;
    isOpen: boolean;
}

const Burger: FC<BurgerProps> = (
    {
        isOpen,
        ...props
    }
) => {
    return (
        <div className={classNames(cls.navIcon, 'self-center', props.className, isOpen ? cls.open : '')}>
            <span className={classNames('h-1 bg-primary-dark')}></span>
            <span className={classNames('h-1 bg-primary-dark')}></span>
            <span className={classNames('h-1 bg-primary-dark')}></span>
            <span className={classNames('h-1 bg-primary-dark')}></span>
        </div>
    );
};

export default Burger;