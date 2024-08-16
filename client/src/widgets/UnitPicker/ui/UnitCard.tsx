import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Typo } from '@/shared/ui/Typo/Typo';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { UnitType } from '@/entity/Units/unitTypes';

interface UnitCardProps {
    children?: ReactNode,
    name: string,
    addUnit: any,
}

export const UnitCard: FC<UnitCardProps> = ({
    children,
    name,
    addUnit,
    ...props
}) => {

    return (
        <Button variant={ButtonVariant.Primary} className={classNames(
            'px-2 py-3 bg-contrast-light border border-primary-dark border-solid items-center',
            'flex gap-2'
        )}
        onClick={addUnit}
        >
            <div className={classNames(
                'basis-4/12 flex flex-col justify-center',
            )}>
                <img src="https://placehold.co/600x400" alt="value" />
            </div>
            <div className={classNames(
                'basis-8/12'
            )}>
                <Typo.H5>{name}</Typo.H5>
            </div>
        </Button>
    );
};