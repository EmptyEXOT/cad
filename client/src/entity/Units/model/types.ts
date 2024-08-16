import { XYPosition } from '@xyflow/react'
import {NodeHandle} from "@xyflow/system/dist/esm/types/nodes"
import { UnitType } from "../unitTypes";

export type UnitModel = {
    type: UnitType | string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
    id: string,
    position: XYPosition,
    handles: NodeHandle[]
}
