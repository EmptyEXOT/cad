import { FilterNode } from "./ui/Filter";
import { PolymerizatorNode } from "./ui/Polymerizator";
import { SmelterNode } from "./ui/Smelter";
import { ValueNode } from "./ui/Value";

export enum UnitType {
    Value = 'value',
    Polymerizator = 'polymerizator',
    Smelter = 'smelter',
    Filter = 'filter',
}

export const unitTypes = {
    [UnitType.Value]: ValueNode,
    [UnitType.Polymerizator]: PolymerizatorNode,
    [UnitType.Smelter]: SmelterNode,
    [UnitType.Filter]: FilterNode,
}