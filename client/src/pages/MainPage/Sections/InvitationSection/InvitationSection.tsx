import { Theme } from "@/shared/theme/types";
import { Button, ButtonVariant } from "@/shared/ui/Button/Button";
import { Section } from "@/shared/ui/Section/Section";
import { Typo, TypoVariant } from "@/shared/ui/Typo/Typo";
import DrumImage from "assets/Hero.jpg";
import classNames from "classnames";
import { FC, ReactNode } from 'react';

interface InvitationSectionProps {
    children?: ReactNode,
}

export const InvitationSection: FC<InvitationSectionProps> = () => {
    return (

        <div>

            <Section className={classNames(
                'gap-6 py-8 w-full flex flex-col justify-center',
                'relative overflow-hidden',
                'md:min-h-64',
                '2xl:min-h-80 2xl:px-64',
            )}>
                <div className={classNames(
                    'w-full h-screen absolute -z-10 top-0 left-0'
                )}>
                    <img src={DrumImage} alt={'Drum'} className={classNames(
                        'object-cover filter grayscale-80 brightness-20 scale-110 h-screen w-full',
                    )} />
                </div>
                <div className={classNames('2xl:max-w-[1024px] px-0 w-full flex flex-col gap-5')}>
                    <Typo.H2 variant={TypoVariant.PrimaryLight}>Получите новый опыт проектирования АСУТП прямо
                        сейчас!</Typo.H2>
                    <div className={classNames('flex justify-start gap-4 w-full')}>
                        <Button
                            variant={ButtonVariant.Primary}
                            border
                            className={classNames('bg-contrast-light')}
                            theme={Theme.Light}
                        >
                            <Typo.P className={classNames('text-contrast-dark px-4 py-2')}>Войти</Typo.P>
                        </Button>
                    </div>
                </div>

            </Section>
        </div>)
}
