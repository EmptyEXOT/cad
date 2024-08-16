import { Button, ButtonVariant } from "@/shared/ui/Button/Button";
import classNames from "classnames";
import { FC, ReactNode } from 'react';

interface CommunityButtonProps {
    children?: ReactNode,
}

export const CommunityButton: FC<CommunityButtonProps> = ({
    children,
}) => {
    return (
        <Button variant={ButtonVariant.Primary}
            className={classNames(
                'w-full px-4 flex flex-col gap-2 items-center justify-between bg-secondary-dark border border-solid border-neutral-500 rounded-lg py-3',
                'md:w-full md:px-0 md:justify-start',
            )}>
            {children}
        </Button>
    );
};
