import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Handle, Node, NodeProps, Position } from '@xyflow/react';

interface UnitProps {
    children?: ReactNode,

}

type UnitNode = Node<{
    header: string,
}, 'unit'>

export const Unit = ({
    ...props
}: NodeProps<UnitNode>) => {
    props.data.header
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