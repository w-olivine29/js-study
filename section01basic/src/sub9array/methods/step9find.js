//find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;

let colorObjects = [
	{ rbg: [97, 185, 48], code: "61b930" },
	{ rbg: [255, 0, 0], code: "ff0000" },
	{ rbg: [253, 139, 63], code: "fd8b3f" },
];

// 주어진 조건에 만족하는 첫번째 배열 요소의 값 반환 (없으면 undefined 반환)
let target1 = colorObjects.find((element) => element.code === "ff0000");
console.log(target1); //{ rbg: [ 255, 0, 0 ], code: 'ff0000' }

let target2 = colorObjects.find((element) => element.code === "0000");
console.log(target2); //undefined
