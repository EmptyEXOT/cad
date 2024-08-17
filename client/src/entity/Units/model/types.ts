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

export type UnitBase = {
    // TODO add enum or string union type for safetyLevel 
    safetyLevel: string,
    // TODO add enum or string union type for explosionProtection 
    explosionProtection: string,
    // TODO add enum or string union type for fireProteciton 
    fireProteciton: string,
    ip: IPLevel,
}

export interface MinMax<L = number, H = number>  {
    min: L,
    max: H
}

export interface IPLevel {
    dust: 0|1|2|3|4|5|6|7|8|9,
    water: 0|1|2|3|4|5|6|7|8|9,
}

export enum AgitatorType {
    Paddle = 'paddle',
    Anchor = 'anchor',
    Turbine = 'turbine',
}

export interface Agitator {
    type: AgitatorType,
    drivePower: number,
    speed: number,
}
