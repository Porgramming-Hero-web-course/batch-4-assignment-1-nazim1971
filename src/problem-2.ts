//Function type
type RemoveDuplicates = (num: number[]) => number[];

const removeDuplicates: RemoveDuplicates = (num) => {
    const seen = new Set<number>();
    const result: number[] = [];

    for (const item of num) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    return result;
};



