import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import classNames from "classnames";
import Anchor from "@/shared/ui/Menu/ui/Anchor";

interface MenuProps {
    children: ReactNode,
    className?: string,
    anchor: ReactNode,
}

export const Menu: FC<MenuProps> = ({
                                        children,
                                        anchor,
                                        className,
                                    }) => {
    const [isOpen, setIsOpen] =
        useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null);

    const onOverlayClick = (e: MouseEvent) => {
        if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', onOverlayClick)
        return () => {
            window.removeEventListener('click', onOverlayClick)
        }
    }, [isOpen]);

    return (
        <div className={classNames('relative')} ref={ref}>
            <Anchor>
                <button
                    onClick={() => {
                        setIsOpen(prev => !prev)
                    }}
                >
                    {anchor}
                </button>
            </Anchor>
            <div
                className={classNames(
                    className,
                    `absolute`,
                    isOpen ? 'inline' : 'hidden'
                )}>
                {children}
            </div>
        </div>
    );
};
