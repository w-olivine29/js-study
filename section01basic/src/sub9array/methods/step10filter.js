//filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
// 조건에 맞는 요소들을 배열로 반환

let colorObjects = [
	{ rbg: [97, 185, 48], code: "61b930" },
	{ rbg: [255, 0, 0], code: "ff0000" },
	{ rbg: [253, 139, 63], code: "fd8b3f" },
];

//
let filterArr1 = colorObjects.filter(
	(element, idx, arr) => element.rbg[0] >= 250
);
console.log(filterArr1);

// {}로 감싸줄 때는 return 문 필수 (없으면 조건비교만 하고 끝남)
let filterArr2 = colorObjects.filter((element, idx, arr) => {
	element.rbg[0] >= 250;
});
console.log(filterArr2); //[] 조건비교만 하고 조건에 맞는 요소를 반환하지 못했음
