import { ComponentType, FC } from 'react';
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