/* eslint-disable react/prop-types */
import React, {FC, ReactElement} from 'react';
import classNames from "classnames";
import "../Typo.scss"
import {TypoProps, TypoVariant} from "@/shared/ui/Typo/Typo";
import {TypoAlign, TypoWeight} from "@/shared/ui/Typo/types";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ParagraphProps extends TypoProps {
}

export type PComponent = FC<Omit<ParagraphProps, 'tag'>>

const P: PComponent = (
    {
        children,
        variant = TypoVariant.PrimaryDark,
        weight = TypoWeight.Regular,
        italic = false,
        underline = false,
        className,
        align = TypoAlign.Start,
    }
): ReactElement | null => {
    return (
        <p
            className={classNames(
                variant,
                weight,
                align,
                italic && 'italic',
                underline && 'underline',
                className)}
        >
            {children}
        </p>
    )
}
export default P;