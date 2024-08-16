import React, {FC} from 'react';
import classNames from "classnames";
import Input from "@/shared/ui/Input/Input";

interface DatePickerProps {
    date: string
    onDateChange: (value: string) => void
}

export type DatePickerComponent = FC<DatePickerProps>

export const DatePicker: DatePickerComponent = ({date, onDateChange}) => {
    return (
        <div>
            <Input
                type={'date'}
                value={date}
                onChange={onDateChange}
                placeholder={'Task description'}
                className={classNames('bg-inherit placeholder:text-neutral-600 resize-none')}/>
        </div>
    );
};
