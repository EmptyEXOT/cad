import { RootState } from "@/shared/store/store"
import { unitsAdapter } from "./Units.adapter"

export const {
    selectAll: selectAllUnits,
    selectById: selectUnitById,
} = unitsAdapter.getSelectors((state: RootState) => state.units)