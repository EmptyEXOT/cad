import { useCallback } from "react";
import { UnitType, unitTypes } from '@/entity/Units/unitTypes';
import { v4 } from "uuid";
import { NodeHandle } from "@xyflow/system/dist/esm/types/nodes";
import { useAppDispatch } from "@/shared/store/hooks";
import { unitsActions } from "@/entity/Units";
import { useReactFlow, Node } from "@xyflow/react";

export const useAddUnit = (nodes: any, setNodes: any) => {
    const dispatch = useAppDispatch()
    const reactFlow = useReactFlow();
    return (unitType: UnitType) => useCallback(() => {
        const newNode = {
            type: unitType,
            id: v4(), // Generate a unique ID
            position: { x: Math.random() * 400, y: Math.random() * 400 }, // Random position for the node
            data: { capacity: 32 }, // Node label
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
        reactFlow.setNodes((nds) => nds.concat(newNode)); // Add new node to the existing nodes
    }, [nodes, setNodes]);
}