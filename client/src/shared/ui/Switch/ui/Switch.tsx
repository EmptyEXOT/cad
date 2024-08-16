import React, {FC, ReactNode} from 'react';
import {useSwitchDispatch} from "@/shared/ui/Switch/hooks/useSwitchDispatch";
import {SwitchActionType} from "@/shared/ui/Switch/type";
import classNames from "classnames";
import {useSwitch} from "@/shared/ui/Switch/hooks/useSwitch";

interface SwitchProps {
    iconOn?: ReactNode,
    iconOff?: ReactNode,
    children?: ReactNode,
    switchCb: (switchState: boolean) => void
}

export const Switch: FC<SwitchProps> = ({
                                            children,
                                            switchCb,
                                            iconOn,
                                            iconOff,
                                            ...props
                                        }) => {
    const dispatch = useSwitchDispatch();
    const isOn = useSwitch();

    const onSwitch = () => {
        dispatch({type: SwitchActionType.Switch})
        switchCb(isOn)
    }

    return (
        <button
            onClick={onSwitch}
            className={classNames(
                'flex rounded-3xl w-16 relative p-1',
                isOn ? 'bg-cyan-300' : 'bg-cyan-600',
            )}
        >
            <div className={classNames(
                'bg-contrast-light transition-transform duration-100 absolute w-6 h-6 rounded-3xl top-[50%] -translate-y-[50%] flex items-center justify-center',
                isOn ? 'translate-x-[20px]' : 'opacity-50'
            )}>
                {isOn ? iconOn : iconOff}
            </div>
        </button>
    );
};
