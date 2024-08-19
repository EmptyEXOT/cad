import { ComponentType, FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Toolbar } from './Toolbar';

export function withToolbar<UnitProps>
    (Unit: ComponentType<UnitProps>): FC<UnitProps> {

    const UnitWithToolbar: FC<UnitProps> = (props) => {
        return (
            <>
                <Toolbar />
                <Unit {...props}/>
            </>
        )
    }

    return (
        UnitWithToolbar
    );
};