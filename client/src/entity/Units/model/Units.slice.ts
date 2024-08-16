import { createSlice } from "@reduxjs/toolkit";
import db from '../temp/db.json';
import { unitsAdapter } from "./Units.adapter";

export const unitsSlice = createSlice({
    name: 'units',
    initialState: unitsAdapter.getInitialState({}, db.nodes),
    reducers: {
        addUnit: unitsAdapter.addOne,
        updateUnit: unitsAdapter.updateOne,
    }
})

export const unitsReducer = unitsSlice.reducer
export const unitsActions = unitsSlice.actions
