import { Test } from "@/widgets/Module/Test/Test";
import { FC } from "react";

enum EModule {
    // Controls = 'Controls',
    // Metronome = 'Metronome',
    Test = 'Test',

}

interface ModuleProps {
    // [EModule.Controls]: ControlProps,
    // [EModule.Metronome]: MetronomeProps,
    [EModule.Test]: object,

}

export type TModulesMap = {
    [key in EModule]: FC<ModuleProps[key]>
}

export const Modules: TModulesMap = {
    // [EModule.Controls]: Controls,
    // [EModule.Metronome]: Metronome,
    // [EModule.Alphabet]: Alphabet,
    [EModule.Test]: Test
}

export type ModuleType = undefined

// const a: ModuleType[] = [Modules.Metronome]