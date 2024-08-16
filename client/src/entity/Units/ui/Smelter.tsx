import { Typo } from '@/shared/ui/Typo/Typo';
import { TypoAlign } from '@/shared/ui/Typo/types';
import { Node, NodeProps, Position } from '@xyflow/react';
import classNames from 'classnames';
import { InputHandle } from './Handles/InputHandle/InputHandle';
import { OutputHandle } from './Handles/OutputHandle/OutputHandle';

export type SmelterProps = {
    capacity: number,
}

type SmelterNode = Node<SmelterProps, 'smelter'>

enum SmelterInput {
    Main = 'input/main',
    Refrigerant = 'input/refrigerant',
}

enum SmelterOutput {
    Main = 'output/main',
    Condensate = 'output/condansate',
}

export const SmelterNode = (props: NodeProps<SmelterNode>) => {
    return (
        <div className={classNames('bg-neutral-100 border-2 border-solid border-neutral-200 w-24 h-40 p-4')}>
            <InputHandle<SmelterInput> id={SmelterInput.Main} position={Position.Top} left={70} />
            <InputHandle<SmelterInput> id={SmelterInput.Refrigerant} position={Position.Top} left={25} />
            <OutputHandle<SmelterOutput> id={SmelterOutput.Main} position={Position.Bottom} />
            <OutputHandle<SmelterOutput> id={SmelterOutput.Condensate} position={Position.Right} top={120} />
            <Typo.H5 align={TypoAlign.Center} className={classNames('break-words w-full')}>Smelter</Typo.H5>
            <Typo.H5>{props.data.capacity}</Typo.H5>
        </div>
    );
};