import { Handle, Node, NodeProps, Position } from '@xyflow/react';
import classNames from 'classnames';
import { ReactNode } from 'react';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
interface UnitProps {
    children?: ReactNode,
}

type UnitNode = Node<{
    header: string,
}, 'unit'>

export const Unit = ({
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    ...props
}: NodeProps<UnitNode>) => {
    return (
        <>
            <div className={classNames('w-10 h-28 bg-cyan-500')}>
                <Handle type={'target'} position={Position.Top} />
                <Handle type={'target'} position={Position.Top} />
                <Handle type={'target'} position={Position.Top} />
            </div>
        </>
    );
};