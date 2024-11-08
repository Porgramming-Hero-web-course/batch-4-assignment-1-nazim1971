type CountWordOccurrences = (sentence: string, keyword: string) => number;

const countWordOccurrences: CountWordOccurrences = (sentence, word) => {
	return sentence.toLowerCase().split(word.toLowerCase()).length - 1;
};

//console.log(countWordOccurrences("I love typescript typescript typescript", "typescript"));