import { Typo } from '@/shared/ui/Typo/Typo';
import { TypoAlign } from '@/shared/ui/Typo/types';
import { Node, NodeProps, Position } from '@xyflow/react';
import classNames from 'classnames';
import { InputHandle } from './Handles/InputHandle/InputHandle';
import { OutputHandle } from './Handles/OutputHandle/OutputHandle';

export type PolymerizatorProps = {
    capacity: number,
}

type PolymerizatorNode = Node<PolymerizatorProps, 'polymerizator'>

enum PolymerizatorInput {
    Main = 'input/main',
    Secondary = 'input/secondary',
}

enum PolymerizatorOutput {
    Main = 'output/main',
    Condensate = 'output/condansate',
}

export const PolymerizatorNode = (props: NodeProps<PolymerizatorNode>) => {
    return (
        <div className={classNames('bg-neutral-100 border-2 border-solid border-neutral-200 w-24 h-64 p-4')}>
            <InputHandle<PolymerizatorInput> id={PolymerizatorInput.Main} position={Position.Top} left={70} />
            <InputHandle<PolymerizatorInput> id={PolymerizatorInput.Secondary} position={Position.Top} left={25} />
            <OutputHandle<PolymerizatorOutput> id={PolymerizatorOutput.Main} position={Position.Bottom} />
            <OutputHandle<PolymerizatorOutput> id={PolymerizatorOutput.Condensate} position={Position.Right} top={180} />
            <Typo.H5 align={TypoAlign.Center} className={classNames('break-words w-full')}>Polimerizator</Typo.H5>
            <Typo.H5>{props.data.capacity}</Typo.H5>
        </div>
    );
};