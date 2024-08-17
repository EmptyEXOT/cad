import { filterDefaults, FilterProps } from '@/entity/Units/ui/Filter';
import { polymerizatorDefaults, PolymerizatorProps } from '@/entity/Units/ui/Polymerizator';
import { smelterDefaults, SmelterProps } from '@/entity/Units/ui/Smelter';
import { valueDefaults, ValueProps } from '@/entity/Units/ui/Value';
import { UnitType } from '@/entity/Units/unitTypes';
import { useAddUnit } from '@/features/addUnit/useAddUnit';
import classNames from "classnames";
import { FC, ReactNode } from 'react';
import { UnitCard } from './UnitCard';

interface UnitPickerProps {
    children?: ReactNode,
}

export const UnitPicker: FC<UnitPickerProps> = () => {
    const addUnit = useAddUnit();
    return (
        <div className={classNames('absolute w-[20vw] top-0 bottom-0 bg-neutral-100 pt-20 px-2 flex flex-col gap-2')}>
            <UnitCard name='Резервуар' addUnit={
                addUnit<ValueProps>
                    (UnitType.Value, valueDefaults)
            }
            />
            <UnitCard name='Полим-ная колонна' addUnit={
                addUnit<PolymerizatorProps>
                    (UnitType.Polymerizator, polymerizatorDefaults)
            }
            />
            <UnitCard name='Плавитель' addUnit={
                addUnit<SmelterProps>
                    (UnitType.Smelter, smelterDefaults)
            }
            />
            <UnitCard name='Фильтр' addUnit={
                addUnit<FilterProps>
                    (UnitType.Filter, filterDefaults)
            }
            />
        </div>
    );
};
