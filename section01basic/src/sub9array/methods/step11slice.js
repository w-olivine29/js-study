//slice(start?: number, end?: number): T[];

let colorObjects = [
	{ rbg: [97, 185, 48], code: "61b930" },
	{ rbg: [255, 0, 0], code: "ff0000" },
	{ rbg: [253, 139, 63], code: "fd8b3f" },
	{ rbg: [172, 60, 216], code: "ac3cd8" },
];

let sliceArr1 = colorObjects.slice(0, 1); // 보통 프로그래밍 시 end는 미포함 => 0번 인덱스 요소만 반환할 것임
console.log(sliceArr1); //[ { rbg: [ 97, 185, 48 ], code: '61b930' } ]

let sliceArr2 = colorObjects.slice(1); //1번 인덱스부터 끝요소까지 반환
console.log(sliceArr2);
