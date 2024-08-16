import { TypoAlign, TypoWeight } from "@/shared/ui/Typo/types";
import { Typo } from "@/shared/ui/Typo/Typo";
import classNames from "classnames";
import { FC, ReactNode } from 'react';

interface HeaderProps {
    children?: ReactNode,
}

export const Header: FC<HeaderProps> = () => {
    return (
        <Typo.H3
            weight={TypoWeight.Regular}
            align={TypoAlign.Center}
            className={classNames('md:text-start')}
        >
            Join our Community
        </Typo.H3>
    );
};
