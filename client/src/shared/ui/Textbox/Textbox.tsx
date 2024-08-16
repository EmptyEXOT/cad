import classNames from "classnames";
import { FC, useRef } from 'react';
import './Textbox.scss';
interface TextariaProps {
    placeholder: string
}

export const Textbox: FC<TextariaProps> = () => {

    const ref = useRef<HTMLDivElement>(null)
    return (
        <div
            ref={ref}
            role={'textbox'}
            aria-readonly={false}
            contentEditable={true}
            className={classNames('text-wrap max-w-xl outline-0')}
        />
    );
};
