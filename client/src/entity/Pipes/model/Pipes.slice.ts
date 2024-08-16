import { createSlice } from "@reduxjs/toolkit";
import { pipesAdapter } from "./Pipes.adapter";
import pipes from '../temp.json'

export const pipesSlice = createSlice({
    name: 'pipes',
    initialState: pipesAdapter.getInitialState({}, pipes.pipes),
    reducers: {
        addPipe: pipesAdapter.addOne,
        removePipe: pipesAdapter.removeOne,
    }
})

export const pipesReducer = pipesSlice.reducer
export const pipesActions = pipesSlice.actions