import React, {ReactNode, FC} from 'react';

interface TestProps {
    children?: ReactNode,
}

export const Test: FC<TestProps> = ({
                                        children,
                                        ...props
                                    }) => {
    return (
        <div>
            
        </div>
    );
};
