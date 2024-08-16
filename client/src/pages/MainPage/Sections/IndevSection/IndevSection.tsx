import { Section } from "@/shared/ui/Section/Section";
import { Typo } from "@/shared/ui/Typo/Typo";
import { TypoWeight } from "@/shared/ui/Typo/types";
import classNames from "classnames";
import { FC, ReactNode } from 'react';

interface IndevSectionProps {
    children?: ReactNode,
}

export const IndevSection: FC<IndevSectionProps> = () => {
    return (
        <Section className={classNames(
            'flex flex-col gap-8 pt-24 pb-4',
            'md:pt-24 md:gap-20',
            '2xl:max-w-[1536px] 2xl:border-x-2 2xl:border-solid 2xl:border-x-[#B0B0B0]',
        )}>
            <div
                className={classNames('flex flex-col gap-8 px-4 py-6 bg-[#FFF2AE] border-2 border-solid border-[#FFCE21]')}>
                <Typo.H1 weight={TypoWeight.Bold}>
                    Бета-тестирование!
                </Typo.H1>
                <Typo.P>
                    Данное приложение находится на стадии раннего бета-тестирования. Некоторые функции могут быть
                    недоступны. Возможны непредвиденные ошибки в работе сервисов. Приносим извенения за возможные
                    неудоства
                </Typo.P>
            </div>
        </Section>
    );
};
