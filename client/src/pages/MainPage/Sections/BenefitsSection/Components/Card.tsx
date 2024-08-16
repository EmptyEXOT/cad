import { Typo } from '@/shared/ui/Typo/Typo';
import { TypoWeight } from "@/shared/ui/Typo/types";
import classNames from "classnames";
import { FC, ReactNode } from 'react';

interface CardProps {
    children?: ReactNode,
    icon: ReactNode,
    header: string,
    description: string,
}

export const Card: FC<CardProps> = ({
    description,
    header,
    icon,
}) => {
    return (
        <div className={classNames('flex flex-col gap-4 w-full')}>
            {icon}
            <Typo.H3 weight={TypoWeight.Bold}>{header}</Typo.H3>
            <Typo.P>{description}</Typo.P>
        </div>
    );
};
