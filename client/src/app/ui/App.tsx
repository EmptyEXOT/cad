import { edgeTypes } from '@/entity/Pipes/edgeTypes';
import { selectAllPipes } from '@/entity/Pipes/model/Pipes.selectors';
import { selectAllUnits, unitsActions } from '@/entity/Units/index';
import { UnitType, unitTypes } from '@/entity/Units/unitTypes';
import { useAddUnit } from '@/features/addUnit/useAddUnit';
import { saveProject } from '@/features/saveProject';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
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
import { NodeHandle } from "@xyflow/system/dist/esm/types/nodes";
import classNames from "classnames";
import { FC, ReactNode, useCallback } from 'react';
import { v4 } from 'uuid';

interface AppProps {
    children?: ReactNode,
}

const initialNodes: Node[] = [
    { id: '1', position: { x: 25, y: 50 }, data: { label: '1' }, type: 'value' },
    { id: '2', position: { x: 100, y: 200 }, data: { label: '2' } }
]

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2', type: 'pipe', style: { stroke: 'black' } }];

export const App: FC<AppProps> = ({
    children,
    ...props
}) => {
    const dispatch = useAppDispatch();
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
    const [nodes, setNodes, onNodesChange] = useNodesState(flowNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(flowPipes);
    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge({ ...params, type: 'pipe' }, eds)),
        [setEdges],
    );

    // const addNode = useCallback(() => {
    //     const newNode = {
    //         type: UnitType.Value,
    //         id: v4(), // Generate a unique ID
    //         position: { x: Math.random() * 400, y: Math.random() * 400 }, // Random position for the node
    //         data: { capacity: 32 }, // Node label
    //         handles: [] as NodeHandle[]
    //     };
    //     dispatch(unitsActions.addUnit({
    //         data: newNode.data,
    //         id: newNode.id,
    //         position: newNode.position,
    //         type: newNode.type,
    //         handles: [

    //         ]
    //     }))
    //     setNodes((nds) => nds.concat(newNode)); // Add new node to the existing nodes
    // }, [nodes, setNodes]);

    const addNode = useAddUnit(nodes, setNodes);
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

