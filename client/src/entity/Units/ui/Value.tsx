import { Typo } from '@/shared/ui/Typo/Typo';
import { TypoAlign } from '@/shared/ui/Typo/types';
import { withToolbar } from '@/widgets/Toolbar/ui/withToolbar';
import { Node, NodeProps, Position } from '@xyflow/react';
import classNames from 'classnames';
import { unitBaseDefaults } from '../model/defaults';
import { Agitator, MinMax, UnitBase } from '../model/types';
import { InputHandle } from './Handles/InputHandle/InputHandle';
import { OutputHandle } from './Handles/OutputHandle/OutputHandle';

enum ValueInput {
    Main = 'input/main',
    Secondary = 'input/secondary',
}

enum ValueOutput {
    Main = 'output/main',
}

export type ValueProps = {
    capacity: number,
    allowableTemperature: MinMax,
    allowablePressure: MinMax,
    heatingPower: number,
    heatingRange: MinMax,
    agitator: Agitator,   
} & UnitBase

type ValueNode = Node<ValueProps, 'value'>

export const valueDefaults: ValueProps = {
    ...unitBaseDefaults,
    agitator: {
        drivePower: null,
        speed: null,
        type: null,
    },
    allowablePressure: {
        min: null,
        max: null
    },
    allowableTemperature: {
        min: null,
        max: null
    },
    capacity: null,
    heatingPower: null,
    heatingRange: {
        min: null,
        max: null,
    },
}

export const ValueNode = withToolbar((props: NodeProps<ValueNode>) => {

    return (
        <>
        <div className={classNames('bg-neutral-100 border-2 border-solid border-neutral-200 w-24 h-32 p-4')}>
            <InputHandle<ValueInput> id={ValueInput.Main} position={Position.Top} left={70} />
            <InputHandle<ValueInput> id={ValueInput.Secondary} position={Position.Top} left={25} />
            <OutputHandle<ValueOutput> id={ValueOutput.Main} position={Position.Bottom} />
            <Typo.H5 align={TypoAlign.Center} className={classNames('break-words w-full')}>Value</Typo.H5>
            <Typo.H5>{props.data.capacity}</Typo.H5>
        </div>
        </>
        
    );
});