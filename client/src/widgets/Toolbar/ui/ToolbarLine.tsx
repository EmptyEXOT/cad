import { Typo } from '@/shared/ui/Typo/Typo';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';

interface ToolbarLineProps {
    prop: string,
    value?: string | number | ReactNode;
}

export const ToolbarLine: FC<ToolbarLineProps> = ({
    prop,
    value,
}) => {
    return (
        <div className={classNames('flex gap-2')}>
            <Typo.H4>{prop}</Typo.H4>
            {value}
        </div>
    );
};