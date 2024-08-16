import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import DrumImage from "assets/Hero.jpg";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {TypoAlign, TypoWeight} from "@/shared/ui/Typo/types";
import {Section} from "@/shared/ui/Section/Section";
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";

interface HeaderSectionProps {
    children?: ReactNode,
}

export const HeaderSection: FC<HeaderSectionProps> = ({
                                                          children,
                                                          ...props
                                                      }) => {
    return (
        <Section className={classNames(
            'gap-2 pt-24 pb-32 min-h-screen w-full flex flex-col justify-center',
            'relative overflow-hidden',
        )}>
            <div className={classNames(
                'w-full h-screen absolute -z-10 top-0 left-0'
            )}>
                <img src={DrumImage} alt={'Drum'} className={classNames(
                    'object-cover filter grayscale-80 brightness-20 scale-110 h-screen w-full',
                    '',
                    ''
                )}/>
            </div>
            <div className={classNames('flex flex-col justify-center')}>
                <div className={classNames('flex flex-col justify-center gap-16')}>
                    <Typo.H1 align={TypoAlign.Center} variant={TypoVariant.PrimaryLight} weight={TypoWeight.Bold}>CAD system for APCS</Typo.H1>
                    <Typo.P align={TypoAlign.Center} variant={TypoVariant.PrimaryLight}> Революционная CAD система для бесшовного проектирования и
                        оптимизации ваших проектов</Typo.P>
                    <div className={classNames('flex justify-center gap-4')}>
                        <Button
                            variant={ButtonVariant.Primary}
                            className={classNames('bg-contrast-light')}
                        >
                            <Typo.P className={classNames('text-contrast-dark px-4 py-2')}>Войти</Typo.P>
                        </Button>
                        <Button
                            variant={ButtonVariant.Primary}
                            border
                        >
                            <Typo.P className={classNames('px-4 py-2')} variant={TypoVariant.PrimaryLight}>Подробнее</Typo.P>
                        </Button>
                    </div>
                </div>
            </div>
            {/* contents div to change layout sm-md-* */}
        </Section>
    );
};
