import React, {ReactNode, FC} from 'react';
import classNames from "classnames";

interface SectionProps {
    children?: ReactNode,
    className?: string
}

export const Section: FC<SectionProps> = ({
                                              children,
                                              className,
                                              ...props
                                          }) => {
    return (
        <div className={classNames(
            'max-w-screen w-full bg-contrast-light z-0',
            'items-center',
            'px-4 mx-auto',
            'md:px-16',
            'lg:px-32',
            'xl:px-64',
            className
        )}>
            {children}
        </div>
    );
};
