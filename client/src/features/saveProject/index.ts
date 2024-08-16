import { store } from "@/shared/store/store";


export const saveProject = () => {
    const units = store.getState().units;
    // const pipes = store.getState().pipes;

    const a = document.createElement('a')
    const result = {
        units: units.entities,
        pipes: {},
        wires: {},
    }
    const jsonProject = JSON.stringify(result, null, 2);
    const file = new Blob([jsonProject], { type: 'text/plain' })
    a.href = URL.createObjectURL(file);
    a.download = 'config';
    a.click();
}