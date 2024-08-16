import { Pipe } from "./ui/Pipe";

export enum EdgeType {
    Pipe = 'pipe',
}

export const edgeTypes = {
    [EdgeType.Pipe]: Pipe,
}