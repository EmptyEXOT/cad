import { Typo, TypoVariant } from "@/shared/ui/Typo/Typo";
import { TypoAlign } from "@/shared/ui/Typo/types";
import classNames from "classnames";
import { FC, ReactNode } from 'react';

interface DescriptionProps {
    children?: ReactNode,
}

export const Description: FC<DescriptionProps> = () => {
    return (
        <Typo.P
            align={TypoAlign.Center}
            variant={TypoVariant.SecondaryLight}
            className={classNames(
                'md:text-start'
            )}
        >
            To be the best, you need to learn from the best. Join our community on social media!
        </Typo.P>
    );
};
