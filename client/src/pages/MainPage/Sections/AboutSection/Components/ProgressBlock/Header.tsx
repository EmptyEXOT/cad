import React, {ReactNode, FC} from 'react';
import {TypoAlign, TypoWeight} from "@/shared/ui/Typo/types";
import classNames from "classnames";
import {Typo} from "@/shared/ui/Typo/Typo";

interface HeaderProps {
    children?: ReactNode,
}

export const Header: FC<HeaderProps> = ({
                                            children,
                                            ...props
                                        }) => {
    return (
        <Typo.H3
            weight={TypoWeight.Regular}
            align={TypoAlign.Center}
            className={classNames(
                'px-4',
                'md:text-start'
            )}
        >
            Track Your Progress and Stay Motivated
        </Typo.H3>
    );
};
