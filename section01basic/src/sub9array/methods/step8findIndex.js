// indexOf로는 배열 요소값이 객체이거나 배열 형태일때는 찾아줄 수 없다.
// findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;

let colorObjects = [
	{ rbg: [97, 185, 48], code: "61b930" },
	{ rbg: [255, 0, 0], code: "ff0000" },
	{ rbg: [253, 139, 63], code: "fd8b3f" },
];

let targetIndex1 = colorObjects.findIndex(
	(element) => element.code === "ff0000"
);
console.log(targetIndex1); //1

colorObjects.findIndex((element, idx, array) => {
	console.log(`[${idx} 번째 color] code: ${element.code}, rbg:${element.rbg}`);
});

colorObjects.findIndex((element, idx, array) => {
	console.log(array);
});
