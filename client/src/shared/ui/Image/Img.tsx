import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {Typo} from "@/shared/ui/Typo/Typo";

interface ImgProps {
    src: string,
    alt: string,
    className?: string,
}

export const Img: FC<ImgProps> = ({
                                      src,
                                      alt,
                                      className,
                                      ...props
                                  }) => {
    return (
        <div className={classNames(
            'z-30 relative',
            className,
        )}>
            <img className={classNames(
                'object-contain h-full w-full'
            )} src={src} alt={alt}/>
        </div>
    );
};
