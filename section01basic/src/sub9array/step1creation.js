// 생성자 함수 방식 ======================================
let constructorArr1 = new Array(1, 2, 3);
let constructorArr2 = new Array(3); //숫자 요소 하나만 넣으면 배열의 길이 지정

console.log(constructorArr1); //[ 1, 2, 3 ]
console.log(constructorArr2); //[ <3 empty items> ]

// 리터럴 방식 ============================================
let literalArr1 = [1, 2, 3];
let literalArr2 = [3];

// 리터럴 방식은 항상 실제 저장되는 값으로 인식
console.log(literalArr1); //[ 1, 2, 3 ]
console.log(literalArr2); //[ 3 ]

//===============================================================
// 대부분의 동적 타입 언어의 배열은 여러 타입을 섞어서 넣을 수 있음
let arr = [
	{ name: "객체" },
	30,
	"array",
	function () {
		console.log("hello js");
	},
	null,
	undefined,
];

console.log(arr); // 정의한대로 출력됨
