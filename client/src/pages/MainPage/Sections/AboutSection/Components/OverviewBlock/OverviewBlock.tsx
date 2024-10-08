import OpenIcon from "@/shared/assets/openIcon.svg";
import { Button, ButtonVariant } from "@/shared/ui/Button/Button";
import classNames from "classnames";
import { FC, ReactNode } from 'react';
import { AboutAppSvg } from "./AboutAppSVG";
import { AboutJourneySvg } from './AboutJourneySVG';
import { Description } from './Description';
import { Header } from './Header';

interface OverviewBlockProps {
    children?: ReactNode,
}

export const OverviewBlock: FC<OverviewBlockProps> = () => {
    return (
        <div className={classNames(
            'flex flex-col gap-6 mb-12',
            'md:basis-1/2 md:mb-0',
        )}>
            <Header />
            <div className={classNames('relative')}>
                <AboutJourneySvg />
            </div>
            <div className={classNames('relative')}>
                <AboutAppSvg />
            </div>
            <Description />

            {/*TODO move to features model*/}
            <div className={classNames(
                'flex justify-center',
                'md:justify-start'
            )}>
                <Button
                    variant={ButtonVariant.Primary}
                    className={classNames(
                        'py-2 px-4 flex items-center justify-center',
                        'md:ps-0'
                    )}>
                    Explore
                    <OpenIcon />
                </Button>
            </div>
        </div>
    );
};
