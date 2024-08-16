import { Card } from "@/pages/MainPage/Sections/BenefitsSection/Components/Card";
import { Theme } from "@/shared/theme/types";
import { Button, ButtonVariant } from "@/shared/ui/Button/Button";
import { Section } from "@/shared/ui/Section/Section";
import { TypoWeight } from "@/shared/ui/Typo/types";
import { Typo, TypoVariant } from "@/shared/ui/Typo/Typo";
import AppsIcon from 'assets/AppsIcon.svg';
import BoltIcon from 'assets/BoltIcon.svg';
import ForwardIcon from 'assets/ForwardIcon.svg';
import classNames from "classnames";
import { FC, ReactNode } from 'react';

interface BenefitsSectionProps {
    children?: ReactNode,
}

export const BenefitsSection: FC<BenefitsSectionProps> = () => {
    return (
        <Section className={classNames(
            'flex flex-col gap-12 pt-24 pb-32',
            'md:pt-24 md:gap-20',
            '2xl:max-w-[1536px] 2xl:border-x-2 2xl:border-solid 2xl:border-x-[#B0B0B0]',
        )}>
            <Typo.H1 className={classNames('text-contrast-dark')} weight={TypoWeight.Bold}>Почему именно CAD sys for APCS?</Typo.H1>
            <div className={classNames('contents lg:flex justify-between gap-10')}>
                <Card
                    header={'Наши сервисы помогут Вам улучшить существующую АСУТП'}
                    description={'Наша САПР-система предлагает широкий спектр дополнительных функций, которые выделяют ее среди конкурентов.'}
                    icon={<AppsIcon />}
                />
                <Card
                    header={'Раскройте весь потенциал ваших проектов'}
                    description={'Наша CAD-система позволяет вам с легкостью создавать потрясающие проекты.'}
                    icon={<BoltIcon />}
                />
                <Card
                    header={'Выведите свои проекты на новый уровень'}
                    description={'Откройте для себя расширенные функции, которые произведут революцию в вашем процессе проектирования.'}
                    icon={<ForwardIcon />}
                />
            </div>
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
                    <Typo.P className={classNames('px-4 py-2')} variant={TypoVariant.PrimaryDark} underline>Свяжитесь с
                        нами</Typo.P>
                </Button>
            </div>
        </Section>
    );
};
