import { Handle, Position } from '@xyflow/react';

interface InputHandleProps<HandleId> {
    id: HandleId,
    left?: number,
    right?: number,
    top?: number,
    bottom?: number,
    position: Position,
    classname?: string,
    style?: React.CSSProperties,
}

export const InputHandle = <T extends string>(props: InputHandleProps<T>) => {

    return (
        <Handle
            className={props.classname}
            style={{
                left: props.left || null,
                right: props.right || null,
                top: props.right || null,
                bottom: props.bottom || null,
                backgroundColor: 'green',
                width: '10px',
                height: '10px',
            }}
            position={props.position}
            type='target'
            id={props.id}
        />
    );
};