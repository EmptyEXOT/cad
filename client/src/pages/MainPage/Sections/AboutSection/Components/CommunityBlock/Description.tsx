import React, {ReactNode, FC} from 'react';
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {TypoAlign} from "@/shared/ui/Typo/types";
import classNames from "classnames";

interface DescriptionProps {
    children?: ReactNode,
}

export const Description: FC<DescriptionProps> = ({
                                                      children,
                                                      ...props
                                                  }) => {
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
