import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {TypoWeight} from "@/shared/ui/Typo/types";
import {Typo, TypoVariant} from '@/shared/ui/Typo/Typo';
import {Section} from "@/shared/ui/Section/Section";
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
import {Theme} from "@/shared/theme/types";

interface AboutSectionProps {
    children?: ReactNode,
}

export const AboutSection: FC<AboutSectionProps> = ({
                                                        children,
                                                        ...props
                                                    }) => {
    return (
        <Section className={classNames(
            'flex flex-col gap-8 pt-24 pb-24',
            'md:pt-32',
            '2xl:max-w-[1536px] 2xl:border-x-2 2xl:border-solid 2xl:border-x-[#B0B0B0]',
        )}>
            <div className={classNames('contents xl:flex justify-between gap-8')}>
                <div className={classNames('contents xl:max-w-8')}>
                    <Typo.H1 className={classNames('text-contrast-dark xl:max-w-96')} weight={TypoWeight.Bold}>Оптимизируйте Ваш
                        процесс проектирования</Typo.H1>
                </div>
                <div className={classNames('contents xl:flex xl:flex-col xl:w-[50%] gap-5')}>
                    <Typo.P>Наша САПР-система для АСУ ТП обеспечивает бесшовное и эффективное решение для проектирования
                        и оптимизации сложных процессов автоматизации. Благодаря интуитивно понятному интерфейсу и
                        инновационным функциям она позволяет инженерам создавать точные и надежные системы
                        управления.</Typo.P>
                    <div className={classNames('flex justify-start gap-4 w-full')}>
                        <Button
                            variant={ButtonVariant.Primary}
                            border
                            className={classNames('bg-contrast-light')}
                            theme={Theme.Light}
                        >
                            <Typo.P className={classNames('text-contrast-dark px-4 py-2')}>Войти</Typo.P>
                        </Button>
                        <Button
                            variant={ButtonVariant.Primary}
                        >
                            <Typo.P className={classNames('px-4 py-2')} variant={TypoVariant.PrimaryDark} underline>Свяжитесь
                                с нами</Typo.P>
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
