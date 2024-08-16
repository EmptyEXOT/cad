import React, {FC, ReactNode} from 'react';
import {Typo} from "@/shared/ui/Typo/Typo";
import classNames from "classnames";
import {Img} from "@/shared/ui/Image/Img";
import {TypoAlign, TypoWeight} from "@/shared/ui/Typo/types";

interface StepComponentProps {
    children?: ReactNode,
    header: string,
    description: string,
    illustration: string,
    stepNumber: number,
}

export const StepComponent: FC<StepComponentProps> = ({
                                                          children,
                                                          header,
                                                          description,
                                                          illustration,
                                                          stepNumber,
                                                          ...props
                                                      }) => {
    return (
        <div className={classNames(
            'flex flex-col gap-8',
            'lg:justify-between'
        )}>
            <div className={classNames('flex flex-col')}>
                <div className={classNames(
                    'w-0.5 h-10 bg-gradient-to-t from-contrast-dark self-center'
                )}/>
                <div className={classNames(
                    'rounded-full border-2 border-solid border-b-contrast-dark w-10 h-10 self-center',
                    'flex justify-center items-center'

                )}><Typo.P align={TypoAlign.Center} weight={TypoWeight.Semibold}>{stepNumber}</Typo.P></div>
            </div>
            <Typo.H2 align={TypoAlign.Center} weight={TypoWeight.Semibold}>{header}</Typo.H2>
            <Typo.P align={TypoAlign.Center}>{description}</Typo.P>
            <Img alt={`step ${stepNumber}`} src={illustration}></Img>
        </div>
    );
};
