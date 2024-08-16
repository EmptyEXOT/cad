import React, {FC} from 'react';
import classNames from "classnames";
import Input from "@/shared/ui/Input/Input";

interface TimePickerProps {
    time: string
    onTimeChange: (value: string) => void
}

export type TimePickerComponent = FC<TimePickerProps>

export const TimePicker: TimePickerComponent = ({time, onTimeChange}) => {
    return (
        <div>
            <Input
                type={'time'}
                value={time}
                onChange={onTimeChange}
                placeholder={'Task description'}
                className={classNames('bg-inherit placeholder:text-neutral-600 resize-none')}/>
        </div>
    );
};
