import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import Logo from '@/shared/assets/Logo.png'
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {Section} from "@/shared/ui/Section/Section";


interface FooterProps {
    children?: ReactNode,
}

export const Footer: FC<FooterProps> = () => {
    return (
        <div>
            <Section className={classNames(
                'flex flex-col gap-12',
                'md:gap-20 md:mx-auto w-full',
                '2xl:px-0 2xl:border-t-2 2xl:border-solid 2xl:border-t-[#B0B0B0]',
            )}>
                <div className={classNames(
                    'flex flex-col gap-10 w-full 2xl:max-w-[1536px] 2xl:px-64 py-8',
                )}>
                    <img src={Logo} width={64} alt=""/>
                    <div className={classNames(
                        'contents',
                        'md:flex'
                    )}>
                        <div className={classNames(
                            'flex flex-col gap-5',
                            'md:w-full',
                        )}>
                            <div className={classNames('flex flex-col gap-2')}>
                                <Typo.H4 variant={TypoVariant.SecondaryDark}>Почта:</Typo.H4>
                                <Typo.H4 variant={TypoVariant.SecondaryDark} underline>email@gmail.com</Typo.H4>
                            </div>
                        </div>
                        <hr className={classNames(
                            'border-none h-[1px] bg-[#4B4B4B]',
                            'md:hidden'
                        )}/>
                    </div>
                    <Typo.H5 variant={TypoVariant.SecondaryLight}>
                        © 2024 CAD sys for APCS. All rights reserved.
                    </Typo.H5>
                </div>

            </Section>
        </div>

    );
};
