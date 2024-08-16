import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {DatePicker, DatePickerComponent} from "@/shared/ui/DatePicker/DatePicker/ui/DatePicker";
import {TimePicker, TimePickerComponent} from "@/shared/ui/DatePicker/Time/ui/TimePicker";

interface DateTimePickerProps {
    children: ReactNode
}

type DateTimeComponent = FC<DateTimePickerProps> & {
    DatePicker?: DatePickerComponent,
    TimePicker?: TimePickerComponent,
}

export const DateTimePicker: DateTimeComponent = ({children}) => {
    return (
        <div className={classNames('flex gap-2')}>
            {children}
        </div>
    );
};

DateTimePicker.DatePicker = DatePicker
DateTimePicker.TimePicker = TimePicker