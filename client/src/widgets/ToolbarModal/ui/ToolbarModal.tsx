import { recursiveTraversal } from '@/shared/lib/forEachRecursive/forEachRecursive';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { ToolbarLine } from '@/widgets/Toolbar/ui/ToolbarLine';
import { useNodeId, useNodesData } from '@xyflow/react';
import classNames from 'classnames';
import { FC } from 'react';

export const ToolbarModal: FC = () => {
    const nodeId = useNodeId();
    const nodeData = useNodesData(nodeId);

    return (
        <Modal className={classNames('w-[50%] bg-primary-light rounded-xl p-4')}>
            {recursiveTraversal<string | number>(nodeData.data).map((obj, idx) =>
                <ToolbarLine
                    key={idx}
                    prop={obj.key} value={
                        <Input value={String(obj.value)} />
                    } />
            )}
            <Button variant={ButtonVariant.Primary}>Save</Button>
        </Modal>
    );
};