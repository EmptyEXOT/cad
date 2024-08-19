import { Typo } from '@/shared/ui/Typo/Typo';
import classNames from 'classnames';
import { FC } from 'react';

interface ToolbarLineProps {
    data: string | number,
}

export const ToolbarLine: FC<ToolbarLineProps> = ({
    data,
}) => {

    return (
        <div className={classNames('flex')}>
            <Typo.H4>{data}</Typo.H4>
        </div>
    );
};