import { FilterProps } from '@/entity/Units/ui/Filter';
import { PolymerizatorProps } from '@/entity/Units/ui/Polymerizator';
import { SmelterProps } from '@/entity/Units/ui/Smelter';
import { ValueProps } from '@/entity/Units/ui/Value';
import { UnitType } from '@/entity/Units/unitTypes';
import { useAddUnit } from '@/features/addUnit/useAddUnit';
import classNames from "classnames";
import { FC, ReactNode } from 'react';
import { UnitCard } from './UnitCard';

interface UnitPickerProps {
    children?: ReactNode,
}

export const UnitPicker: FC<UnitPickerProps> = ({
    children,
    ...props
}) => {
    const addUnit = useAddUnit();
    return (
        <div className={classNames('absolute w-[20vw] top-0 bottom-0 bg-neutral-100 pt-20 px-2 flex flex-col gap-2')}>
            <UnitCard name='Резервуар' addUnit={
                addUnit<ValueProps>
                    (UnitType.Value, { capacity: 51 })
            }
            />
            <UnitCard name='Полим-ная колонна' addUnit={
                addUnit<PolymerizatorProps>
                    (UnitType.Polymerizator, { capacity: 52 })
            }
            />
            <UnitCard name='Плавитель' addUnit={
                addUnit<SmelterProps>
                    (UnitType.Smelter, { capacity: 53 })
            }
            />
            <UnitCard name='Фильтр' addUnit={
                addUnit<FilterProps>
                    (UnitType.Filter, { capacity: 54 })
            }
            />
        </div>
    );
};
