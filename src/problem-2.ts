type RemoveDuplicates = (arr: number[]) => number[];

const removeDuplicates: RemoveDuplicates = (arr) => {
    const newArr = new Set<number>();
    const result: number[] = [];

    for (const duplicate of arr) {
        if (!newArr.has(duplicate)) {
            newArr.add(duplicate);
            result.push(duplicate);
        }
    }

    return result;
};

//console.log(removeDuplicates([1,1,2,3,4,5,6,5,5,5]));


