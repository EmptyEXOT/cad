import { RootState } from "@/shared/store/store";
import { pipesAdapter } from "./Pipes.adapter";

export const {
    selectAll: selectAllPipes, 
    selectById: selectPipeById,
} = pipesAdapter.getSelectors((state: RootState) => state.pipes)