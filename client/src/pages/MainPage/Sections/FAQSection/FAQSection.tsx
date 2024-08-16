import { Card } from "@/pages/MainPage/Sections/FAQSection/Components/Card";
import { Section } from "@/shared/ui/Section/Section";
import { TypoWeight } from "@/shared/ui/Typo/types";
import { Typo } from "@/shared/ui/Typo/Typo";
import classNames from "classnames";
import { FC, ReactNode } from 'react';

interface FaqSectionProps {
    children?: ReactNode,
}

export const FAQSection: FC<FaqSectionProps> = () => {
    return (
        <Section className={classNames(
            'flex flex-col gap-12 pt-24 pb-32',
            'md:pt-24 md:gap-20',
            '2xl:max-w-[1536px] 2xl:border-x-2 2xl:border-solid 2xl:border-x-[#B0B0B0]',
        )}>
            <div className={classNames('contents 2xl:flex 2xl:gap-16')}>
                <div className={classNames('contents 2xl:flex 2xl:flex-col 2xl:gap-8 2xl:w-[50%]')}>
                    <div className={classNames('flex flex-col gap-2 w-full order-1')}>
                        <Typo.H1 className={classNames('text-contrast-dark w-full')} weight={TypoWeight.Bold}>FAQ</Typo.H1>
                        <Typo.P className={classNames('2xl:w-full')}>Найдите ответы на самые популярные вопросы.</Typo.P>
                    </div>
                    <div className={classNames('flex flex-col gap-2 w-full order-3')}>
                        <Typo.P>Не нашли ответ на Ваш вопрос?</Typo.P>
                        <Typo.P underline>Свяжитесь со службой поддержки</Typo.P>
                    </div>
                </div>
                <div className={classNames('contents')}>
                    <div className={classNames('flex flex-col gap-6 2xl:w-[50%] order-2')}>
                        <Card
                            question={'Что такое САПР?'}
                            answer={'САПР — это специализированные программные решения, предназначенные для автоматизации процессов проектирования, моделирования и разработки различных объектов, таких как здания, механизмы, электронные устройства и другие инженерные конструкции.'}
                        />
                        <Card
                            question={'С чего начать работу в CAD sys for APCS?'}
                            answer={'Чтобы начать работу с нашей САПР-системой необходимо авторизоваться в системе и следовать инструкциям'}
                        />
                        <Card
                            question={'Могу ли я получить техническую поддержку?'}
                            answer={'Да, мы оказываем техническую поддержку в случае возникновения проблем или вопросов, связанных с работой в CAD sys for APCS'}
                        />
                        <Card
                            question={'Каковы минимальные системные требования?'}
                            answer={'Наша САПР-система работает в браузерной среде исполнения. Это значит, что для корректной работы Вам необходим лишь современный браузер и стабильное подключение к интернету. Также, отметим что аппаратные средства вашего устройства напрямую влияют на качество работы приложения'}
                        />
                    </div>
                </div>
            </div>



        </Section>
    );
};
