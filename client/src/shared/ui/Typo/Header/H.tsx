import React, {FC, ReactElement} from 'react';
import classNames from "classnames";
import "../Typo.scss"
import {TypoProps, TypoVariant} from "@/shared/ui/Typo/Typo";
import {TypoAlign, TypoWeight} from "@/shared/ui/Typo/types";

export enum HeaderSize {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
}

interface HeaderProps extends Omit<TypoProps, 'tag'> {
    size?: HeaderSize,
}

type HComponent = FC<HeaderProps>
export type HxComponent = FC<Omit<HeaderProps, 'size' | 'tag'>>

const H: HComponent = (
    {
        children,
        variant = TypoVariant.PrimaryDark,
        weight = TypoWeight.Regular,
        italic = false,
        underline = false,
        className,
        align = TypoAlign.Start,
        ...props
    }
): ReactElement | null => {
    props.size = props.size ?? HeaderSize.h1
    return (
        <props.size
            className={classNames(
                variant,
                weight,
                align,
                italic && 'italic',
                underline && 'underline',
                'h',
                className)}>
            {children}
        </props.size>
    )
}

export const H1: HxComponent = ({children, ...props}) => {
    return <H size={HeaderSize.h1} {...props}>{children}</H>
}

export const H2: HxComponent = ({children, ...props}) => {
    return <H size={HeaderSize.h2} {...props}>{children}</H>
}

export const H3: HxComponent = ({children, ...props}) => {
    return <H size={HeaderSize.h3} {...props}>{children}</H>
}

export const H4: HxComponent = ({children, ...props}) => {
    return <H size={HeaderSize.h4} {...props}>{children}</H>
}

export const H5: HxComponent = ({children, ...props}) => {
    return <H size={HeaderSize.h5} {...props}>{children}</H>
}

export const H6: HxComponent = ({children, ...props}) => {
    return <H size={HeaderSize.h6} {...props}>{children}</H>
}

