import { NodeToolbar, Position, useNodeId, useNodesData } from '@xyflow/react';
import classNames from 'classnames';
import { FC, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeObject(obj: any, parentKey = ''): any {
    const result = [];

    // eslint-disable-next-line prefer-const
    for (let key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;
            const value = obj[key];

            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                result.push(...serializeObject(value, fullKey));
            } else {
                result.push([fullKey, value]);
            }
        }
    }

    return result;
}

export const Toolbar: FC = () => {
    const nodeId = useNodeId();
    const nodeData = useNodesData(nodeId);

    useEffect(() => {
        console.log(serializeObject(nodeData.data));        
    }, [])
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
            {nodeId}
        </NodeToolbar>
    );
};