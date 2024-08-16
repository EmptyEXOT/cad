import DiscordLogo from '@/shared/assets/DiscordLogo.svg';
import TelegramLogo from '@/shared/assets/TelegramLogo.svg';
import VKLogo from '@/shared/assets/VKLogo.svg';
import classNames from "classnames";
import { FC, ReactNode } from 'react';
import { CommunityButton } from "./CommunityButton";
import { Description } from './Description';
import { Header } from './Header';


interface CommunityBlockProps {
    children?: ReactNode,
}

export const CommunityBlock: FC<CommunityBlockProps> = () => {
    return (
        <div className={classNames('flex flex-col gap-6')}>
            <Header />
            <Description />
            <div className={classNames('flex justify-between gap-3')}>
                <CommunityButton>
                    <TelegramLogo className={classNames('w-[36px]')} />
                    Telegram
                </CommunityButton>
                <CommunityButton>
                    <VKLogo className={classNames('w-[36px]')} />
                    VK
                </CommunityButton>
                <CommunityButton>
                    <DiscordLogo className={classNames('w-[38px] h-[36px]')} />
                    Discord
                </CommunityButton>
            </div>
        </div>
    );
};
