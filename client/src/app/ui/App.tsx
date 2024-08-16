import { edgeTypes } from '@/entity/Pipes/edgeTypes';
import { selectAllPipes } from '@/entity/Pipes/model/Pipes.selectors';
import { selectAllUnits } from '@/entity/Units/index';
import { unitTypes } from '@/entity/Units/unitTypes';
import { saveProject } from '@/features/saveProject';
import { useAppSelector } from '@/shared/store/hooks';
import { Button, ButtonVariant } from "@/shared/ui/Button/Button";
import { Typo } from '@/shared/ui/Typo/Typo';
import {
    addEdge,
    Background,
    Controls,
    Edge,
    MiniMap,
    Node,
    ReactFlow,
    useEdgesState,
    useNodesState
} from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import classNames from "classnames";
import { FC, ReactNode, useCallback } from 'react';

interface AppProps {
    children?: ReactNode,
}

export const App: FC<AppProps> = () => {
    const storeNodes = useAppSelector(selectAllUnits);
    const storePipes = useAppSelector(selectAllPipes);

    const flowNodes = storeNodes.map(node => ({
        type: node.type,
        id: node.id,
        data: node.data,
        position: { x: node.position.x, y: node.position.y },
        handles: node.handles
    } satisfies Node))

    const flowPipes = storePipes.map(pipe => ({
        id: pipe.id,
        source: pipe.source,
        target: pipe.target,
        sourceHandle: pipe.sourceHandle,
        targetHandle: pipe.targetHandle,
        type: pipe.type,
    } satisfies Edge))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [nodes, setNodes, onNodesChange] = useNodesState(flowNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(flowPipes);
    const onConnect = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (params: any) => setEdges((eds) => addEdge({ ...params, type: 'pipe' }, eds)),
        [setEdges],
    );

    return (
        <div className={classNames('w-screen h-screen')}>
            <ReactFlow
                nodeTypes={unitTypes}
                nodes={nodes}
                edgeTypes={edgeTypes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                snapToGrid={true}
            >
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>

            <Button variant={ButtonVariant.Primary} onClick={saveProject}>
                <Typo.H1>Save</Typo.H1>
            </Button>
        </div>
    );
};

