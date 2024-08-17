import { Typo } from '@/shared/ui/Typo/Typo';
import { TypoAlign } from '@/shared/ui/Typo/types';
import { Node, NodeProps, Position } from '@xyflow/react';
import classNames from 'classnames';
import { InputHandle } from './Handles/InputHandle/InputHandle';
import { OutputHandle } from './Handles/OutputHandle/OutputHandle';
import { IPLevel, MinMax, UnitBase } from '../model/types';
import { unitBaseDefaults } from '../model/defaults';

export type FilterProps = {
    capacity: number,
    allowableTemperature: MinMax,
    allowablePressure: MinMax,
    heatingPower: number,
    heatingRange: MinMax,
    ip: IPLevel,
} & UnitBase

type FilterNode = Node<FilterProps, 'filter'>

enum FilterInput {
    Main = 'input/main',
    Heat = 'input/heat',
}

enum FilterOutput {
    Main = 'output/main',
    Condensate = 'output/condansate',
}

export const filterDefaults: FilterProps = {
    ...unitBaseDefaults,
    allowablePressure: {
        min: null,
        max: null,
    },
    allowableTemperature: {
        min: null,
        max: null,
    },
    capacity: 100,
    heatingPower: null,
    heatingRange: {
        min: null,
        max: null,
    },
}

export const FilterNode = (props: NodeProps<FilterNode>) => {   
    return (
        <div className={classNames('bg-neutral-100 border-2 border-solid border-neutral-200 w-24 h-40 p-4')}>
            <InputHandle<FilterInput> id={FilterInput.Main} position={Position.Bottom} left={25}/>
            <InputHandle<FilterOutput> id={FilterOutput.Main} position={Position.Bottom} left={70}/>
            <OutputHandle<FilterInput> id={FilterInput.Heat} position={Position.Left} top={20}/>
            <OutputHandle<FilterOutput> id={FilterOutput.Condensate} position={Position.Right} top={120}/>
            <Typo.H5 align={TypoAlign.Center} className={classNames('break-words w-full')}>Filter</Typo.H5>
            <Typo.H5>{props.data.capacity}</Typo.H5>
        </div>
    );
};