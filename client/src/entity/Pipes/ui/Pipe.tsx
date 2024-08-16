import { BaseEdge, Edge, EdgeProps, getSmoothStepPath } from '@xyflow/react';

type PipeProps = Edge<{ value: number }, 'pipe'>

export const Pipe = ({
    sourceX,
    sourceY,
    targetX,
    targetY,
    id,
    style,
}: EdgeProps<PipeProps>) => {
    const [edgePath] = getSmoothStepPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    })

    return (
        <BaseEdge path={edgePath} id={id} style={style} interactionWidth={1000} />
    );
};