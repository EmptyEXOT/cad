import { Handle, Position } from '@xyflow/react';

interface OutputHandleProps<HandleId> {
    id: HandleId,
    left?: number,
    right?: number,
    top?: number,
    bottom?: number,
    position: Position,
    classname?: string,
    style?: React.CSSProperties,
}

export const OutputHandle = <T extends string>(props: OutputHandleProps<T>) => {

    return (
        <Handle
            className={props.classname}
            style={{
                left: props.left || null,
                right: props.right || null,
                top: props.top || null,
                bottom: props.bottom || null,
                backgroundColor: 'blue',
                width: '10px',
                height: '10px',
            }}
            position={props.position}
            type='source'
            id={props.id}
        />
    );
};