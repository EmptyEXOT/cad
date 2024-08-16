import { createEntityAdapter } from "@reduxjs/toolkit";
import { PipeModel } from "./types";

export const pipesAdapter = createEntityAdapter<PipeModel>()