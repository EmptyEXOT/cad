export type RecursiveTraversalReturn<T> = { key: string, value: T }[]

export const recursiveTraversal = <R, T = any>(obj: T): RecursiveTraversalReturn<R> => {
    const result: RecursiveTraversalReturn<R> = [];

    function recurse(current: any) {
        for (const key in current) {
            if (Object.prototype.hasOwnProperty.call(current, key)) {
                const value = current[key];
                if (typeof value === 'object' && value !== null) {
                    recurse(value);
                } else {
                    result.push({ key, value })
                }
            }
        }
    }
    recurse(obj);
    return result;
}
