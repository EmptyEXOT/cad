import { recursiveTraversal } from '@/shared/lib/forEachRecursive/forEachRecursive';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { useModalDispatch } from '@/shared/ui/Modal/hooks/useModalDispatch';
import { ModalActionType } from '@/shared/ui/Modal/types';
import { ToolbarModal } from '@/widgets/ToolbarModal/ui/ToolbarModal';
import { NodeToolbar, Position, useNodeId, useNodesData } from '@xyflow/react';
import classNames from 'classnames';
import { FC } from 'react';
import { createPortal } from 'react-dom';
import { ToolbarLine } from './ToolbarLine';

export const Toolbar: FC = () => {
    const nodeId = useNodeId();
    const nodeData = useNodesData(nodeId);

    const modalDispatch = useModalDispatch()

    return (
        <NodeToolbar
            position={Position.Right}
            align={'center'}
            offset={16}
            className={classNames(
                'min-w-10 min-h-10 max-w-30 max-h-100',
                'border border-solid border-x-neutral-500 rounded-xl p-4 bg-contrast-light',
            )}
        >
            <Button variant={ButtonVariant.Primary} onClick={() => { modalDispatch({ type: ModalActionType.Switch }) }}>Modify</Button>
            {recursiveTraversal<string | number>(nodeData.data).map((obj, idx) =>
                <ToolbarLine key={idx} prop={obj.key} value={obj.value} />
            )}
            {/* TODO replace ToolbarModal upper */}
            {createPortal(
                <ToolbarModal />,
                document.body
            )}
        </NodeToolbar>
    );
};