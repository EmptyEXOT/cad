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
                'md:text-start px-4'
            )}
        >
            It's super important to keep track of your progress with anything you do. Our app can help you
            identify and fix your weak spots.
        </Typo.P>
    );
};
