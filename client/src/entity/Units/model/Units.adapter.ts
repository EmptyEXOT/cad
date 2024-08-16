import { createEntityAdapter } from "@reduxjs/toolkit";
import { UnitModel } from "./types";

export const unitsAdapter = createEntityAdapter<UnitModel>(
    //     {
    //     selectId: (unit: Unit) => unit.id,
    //     sortComparer: (a, b) => a.name.localeCompare(b.name)
    // }
)