import { Theme } from "@/shared/theme/types";
import classNames from "classnames";
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    variant: ButtonVariant;
    border?: boolean;
    theme?: Theme;
    filled?: boolean;
}

export const Button: FC<ButtonProps> = ({
                                            children,
                                            className,
                                            variant,
                                            border = false,
    theme = Theme.Dark,
                                            ...props
                                        }) => {
    const calcTheme = (theme: Theme) => {
        switch (theme) {
            case Theme.Light:
                return 'light';
            case Theme.Dark:
                return 'dark';
        }
    }

    return (
        <button {...props}
                className={classNames(
                    className,
                    cls[variant],
                    cls[calcTheme(theme)],
                    border && cls.border,
                    'text-xl',
                )}>
            {children}
        </button>
    );
};
