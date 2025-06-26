// forEach (배열내장함수)
////forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((element) => {
	console.log(element);
});

arr.forEach((element, index) => {
	console.log(`${index}번째 요소: ${element}`);
});

arr.forEach((element, index, array) => {
	console.log(`${index}번째 요소: ${element}`);
	console.log(array); //[1, 2, 3, 4, 5, 6, 7]
});

// Java의 forEach 문과는 많이 다르고 for of문이랑 비슷한 듯하다.
