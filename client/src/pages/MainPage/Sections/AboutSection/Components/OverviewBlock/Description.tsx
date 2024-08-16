import React, {ReactNode, FC} from 'react';
import {TypoAlign} from "@/shared/ui/Typo/types";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
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
            However ambitious your goals are, we have a large set of exercises that will help you achieve the
            desired result
        </Typo.P>
    );
};
