import React, {ReactNode, FC, useCallback} from 'react';
import classNames from "classnames";
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
import {ReactFlow, useReactFlow} from "@xyflow/react";
import {v4} from "uuid";
import { useAddUnit } from '@/features/addUnit/useAddUnit';
import { Typo } from '@/shared/ui/Typo/Typo';
import { UnitType } from '@/entity/Units/unitTypes';
import { UnitCard } from './UnitCard';

interface UnitPickerProps {
    children?: ReactNode,
}

export const UnitPicker: FC<UnitPickerProps> = ({
                                                    children,
                                                    ...props
                                                }) => {
                                    const reactFlow = useReactFlow();
                                    const nodes = reactFlow.getNodes();
    const addUnit = useAddUnit(nodes, reactFlow.setNodes);
    return (
        <div className={classNames('absolute w-[20vw] top-0 bottom-0 bg-neutral-100 pt-20 px-2 flex flex-col gap-2')}>
            <UnitCard name='Резервуар' addUnit={addUnit(UnitType.Value)} />
            <UnitCard name='Полим-ная колонна' addUnit={addUnit(UnitType.Polymerizator)} />
            <UnitCard name='Плавитель' addUnit={addUnit(UnitType.Smelter)} />
            <UnitCard name='Фильтр' addUnit={addUnit(UnitType.Filter)} />
        </div>
    );
};
