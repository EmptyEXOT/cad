import React, {ReactNode, FC} from 'react';
import {Section} from "@/shared/ui/Section/Section";
import classNames from "classnames";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {TypoAlign, TypoWeight} from "@/shared/ui/Typo/types";
import {StepComponent} from "@/pages/MainPage/Sections/ServicesSection/Components/StepComponent";
import Illustration from 'assets/Bez_fona.png'
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
import {Theme} from "@/shared/theme/types";

interface ServicesSectionProps {
    children?: ReactNode,
}

export const ServicesSection: FC<ServicesSectionProps> = ({
                                                              children,
                                                              ...props
                                                          }) => {
    return (
        <Section className={classNames(
            'flex flex-col gap-16 pt-24 pb-32',
            'md:pt-24 md:gap-20',
            '2xl:max-w-[1536px] 2xl:border-x-2 2xl:border-solid 2xl:border-x-[#B0B0B0]',
        )}>
            <div className={classNames(
                'flex flex-col gap-4 w-full'
            )}>
                <Typo.H1 weight={TypoWeight.Bold}>Ваш проект - наши сервисы</Typo.H1>
                <Typo.P>Посмотрите наши иллюстрации о том, как создаются проекты в CAD sys for APCS всего за 4
                    шага!</Typo.P>
            </div>
            <div className={classNames('contents lg:flex lg:flex-col lg:gap-32')}>
                <div className={classNames('contents lg:flex lg:justify-between lg:gap-16')}>
                    <StepComponent
                        header={'Подготовьте Ваш исходный проект'}
                        description={'Перед работой необходимо опредлить, какие именно процессы должна автоматизировать Ваша система, характеристику протекания процесса и прочие входные данные '}
                        stepNumber={1}
                        illustration={Illustration}
                    />
                    <StepComponent
                        header={'Разместите на схеме технологические аппараты'}
                        description={'Ни один технологический процесс не обходится без техологических аппратов. Вы можете быть уверенны, что в нашей библиотеке компонентов найдутся элементы любой сложности'}
                        stepNumber={2}
                        illustration={Illustration}
                    />
                </div>
                <div className={classNames('contents lg:flex lg:justify-between lg:gap-16')}>

                    <StepComponent
                        header={'Автоматизируйте производство при помощи АСУТП'}
                        description={'Теперь, когда Ваш проект полностью описывает протекание технологического процесса, самое время разместить на схеме технические средства автоматизации'}
                        stepNumber={3}
                        illustration={Illustration}
                    />
                    <StepComponent
                        header={'Ваш проект готов!'}
                        description={'Осталось лишь экспортировать Ваш проект в любой необходимый формат. Вы в любой момент можете продолжить совершествовать вашу систему. А регулярные обновления и выход новых функций Вам в этом помогут!'}
                        stepNumber={4}
                        illustration={Illustration}
                    />
                </div>
                <div className={classNames('flex justify-center gap-4 w-full')}>
                    <Button
                        variant={ButtonVariant.Primary}
                        border
                        className={classNames('bg-contrast-light')}
                        theme={Theme.Light}
                    >
                        <Typo.P className={classNames('text-contrast-dark px-4 py-2')}>Попробуйте сейчас!</Typo.P>
                    </Button>
                </div>
            </div>
        </Section>
    );
};
