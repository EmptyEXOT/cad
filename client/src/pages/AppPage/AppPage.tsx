import React from 'react';
import {App} from "@/app/ui/App";
import {UnitPicker} from "@/widgets/UnitPicker/ui/UnitPicker";
import {ReactFlowProvider} from "@xyflow/react";

const AppPage = () => {
    return (
        <>
            <ReactFlowProvider>
                <App />
                <UnitPicker/>
            </ReactFlowProvider>
        </>
    )
};

export default AppPage