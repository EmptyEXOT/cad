import { TypoWeight } from "@/shared/ui/Typo/types";
import { Typo } from "@/shared/ui/Typo/Typo";
import classNames from "classnames";
import { FC, ReactNode } from 'react';

interface CardProps {
    children?: ReactNode,
    question: string,
    answer: string,
}

export const Card: FC<CardProps> = ({
    answer,
    question,
}) => {
    return (
        <div className={classNames('flex flex-col gap-4 px-4 py-6 border border-solid border-b-contrast-dark')}>
            <Typo.H3 weight={TypoWeight.Bold}>{question}</Typo.H3>
            <Typo.P>{answer}</Typo.P>
        </div>
    );
};
