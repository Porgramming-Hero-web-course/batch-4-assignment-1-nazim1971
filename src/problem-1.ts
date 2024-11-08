type SumArray = (num: number[]) => number;

const sumArray: SumArray = (num) => {
	return num.reduce((acc, number) => acc + number, 0);
};

//console.log(sumArray([1,2,3,4,5]));