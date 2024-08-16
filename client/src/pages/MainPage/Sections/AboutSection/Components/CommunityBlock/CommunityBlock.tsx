import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {Header} from './Header';
import {Description} from './Description';
import VKLogo from '@/shared/assets/VKLogo.svg';
import TelegramLogo from '@/shared/assets/TelegramLogo.svg';
import DiscordLogo from '@/shared/assets/DiscordLogo.svg';
import {CommunityButton} from "./CommunityButton";


interface CommunityBlockProps {
    children?: ReactNode,
}

export const CommunityBlock: FC<CommunityBlockProps> = ({
                                                            children,
                                                            ...props
                                                        }) => {
    return (
        <div className={classNames('flex flex-col gap-6')}>
            <Header/>
            <Description/>
            <div className={classNames('flex justify-between gap-3')}>
                <CommunityButton>
                    <TelegramLogo className={classNames('w-[36px]')}/>
                    Telegram
                </CommunityButton>
                <CommunityButton>
                    <VKLogo className={classNames('w-[36px]')}/>
                    VK
                </CommunityButton>
                <CommunityButton>
                    <DiscordLogo className={classNames('w-[38px] h-[36px]')}/>
                    Discord
                </CommunityButton>
            </div>
        </div>
    );
};
