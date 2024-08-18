import { NodeToolbar, Position } from '@xyflow/react';
import { FC } from 'react';

export const Toolbar: FC = () => {
    return (
        <NodeToolbar
            position={Position.Right}
            align={'center'}
            offset={16}
            style={{background: 'red', width: 40, height: 40}}
        />
    );
};