import React, {FC, ReactNode} from 'react';
import {Typo} from "@/shared/ui/Typo/Typo";
import classNames from "classnames";
import {TypoWeight} from "@/shared/ui/Typo/types";

interface CardProps {
    children?: ReactNode,
    question: string,
    answer: string,
}

export const Card: FC<CardProps> = ({
                                        children,
                                        answer,
                                        question,
                                        ...props
                                    }) => {
    return (
        <div className={classNames('flex flex-col gap-4 px-4 py-6 border border-solid border-b-contrast-dark')}>
            <Typo.H3 weight={TypoWeight.Bold}>{question}</Typo.H3>
            <Typo.P>{answer}</Typo.P>
        </div>
    );
};
