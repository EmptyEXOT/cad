import classNames from "classnames";
import React, { FC, InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    children?: ReactNode
    className?: string | undefined;
    value?: string,
    label?: string | ReactNode,
    autofocus?: boolean,
    onChange?: (value: string) => void,
    onReset?: () => void,
    placeholder?: string,
    type?: string,
}


const Input: FC<InputProps> = (
    {
        name,
        value,
        onChange,
        label,
        autofocus = false,
        placeholder = '',
        type = 'text',
        className,
        ...props
    }
) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames('flex flex-col gap-2')}>
            {label && <label htmlFor={props.id}>{label}</label>}
            <input
                name={name}
                autoFocus={autofocus}
                id={props.id}
                className={classNames('border border-neutral-400 rounded-md px-2', className)}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                type={type}
                {...props}
            />
        </div>

    );
};

export default Input;