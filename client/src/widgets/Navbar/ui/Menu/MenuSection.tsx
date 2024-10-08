import { Typo } from '@/shared/ui/Typo/Typo';
import { TypoWeight } from "@/shared/ui/Typo/types";
import classNames from "classnames";
import { FC, ReactNode } from 'react';


interface MenuSectionProps {
    children: ReactNode,
    className?: string | undefined,
    header?: string | ReactNode,
}

const MenuSection: FC<MenuSectionProps> = ({ children, className, header }) => {
    return (
        <div className={classNames('container pb-6 pt-6 px-3', className)}>
            {header && <Typo.H4 className={classNames('pb-2')} weight={TypoWeight.Bold}>{header}</Typo.H4>}
            {children}
        </div>
    );
};

export default MenuSection;