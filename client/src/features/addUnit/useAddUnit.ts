import { unitsActions } from "@/entity/Units";
import { UnitType } from '@/entity/Units/unitTypes';
import { useAppDispatch } from "@/shared/store/hooks";
import { useReactFlow } from "@xyflow/react";
import { NodeHandle } from "@xyflow/system/dist/esm/types/nodes";
import { useCallback } from "react";
import { v4 } from "uuid";

export const useAddUnit = () => {
    const reactFlow = useReactFlow()
    const dispatch = useAppDispatch()
    const addUnit = <T extends Record<string, unknown>>(unitType: UnitType, data: T) => useCallback(() => {
        const newNode = {
            type: unitType,
            id: v4(),
            position: { x: Math.random() * 400, y: Math.random() * 400 },
            data,
            handles: [] as NodeHandle[]
        };
        dispatch(unitsActions.addUnit({
            data: newNode.data,
            id: newNode.id,
            position: newNode.position,
            type: newNode.type,
            handles: [

            ]
        }))
        reactFlow.setNodes((nds) => nds.concat(newNode));
    }, [reactFlow.getNodes(), reactFlow.setNodes]);
    return addUnit;
}