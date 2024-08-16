import {EntityId, EntityState} from "@reduxjs/toolkit";
import {UnitModel} from "@/entity/Units/model/types";

export interface StateSchema {
    units: EntityState<UnitModel, EntityId>
}