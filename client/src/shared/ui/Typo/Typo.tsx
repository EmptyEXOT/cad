import React, {FC, ReactElement, ReactNode} from 'react';
import "./Typo.scss"
import {H1, H2, H3, H4, H5, H6, HxComponent} from "@/shared/ui/Typo/Header/H";
import P, {PComponent} from "@/shared/ui/Typo/Paragraph/P";
import {TypoAlign, TypoWeight} from "@/shared/ui/Typo/types";
import classNames from "classnames";

export enum TypoTag {
    p = 'p',
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
}

export enum TypoVariant {
    PrimaryLight = 'text-primary-light',
    SecondaryLight = 'text-secondary-light',
    PrimaryDark = 'text-contrast-dark',
    SecondaryDark = 'text-contrast-dark',
}

export interface TypoProps {
    children: ReactNode
    className?: string | undefined;
    variant?: TypoVariant,
    weight?: TypoWeight,
    italic?: boolean,
    underline?: boolean,
    align?: TypoAlign,
    tag: TypoTag,
}

export type TypoComponent = FC<TypoProps> & {
    H1: HxComponent,
    H2: HxComponent,
    H3: HxComponent,
    H4: HxComponent,
    H5: HxComponent,
    H6: HxComponent,
    P: PComponent,
};

export const Typo: TypoComponent = (
    {
        children,
        variant = TypoVariant.PrimaryDark,
        weight = TypoWeight.Regular,
        italic = false,
        underline = false,
        align,
        className,
        ...props
    }
): ReactElement => {
    return (
        <props.tag
            className={classNames(
                variant,
                weight,
                align,
                italic && 'italic',
                underline && 'underline',
                className,
            )}
        >
            {children}
        </props.tag>
    );
};

Typo.H1 = H1
Typo.H2 = H2
Typo.H3 = H3
Typo.H4 = H4
Typo.H5 = H5
Typo.H6 = H6

Typo.P = P
