// 생성자 함수
let constructorObj = new Object();
console.log(constructorObj); //{}

//===========================================
// 객체 리터럴
let literalObj = {};
console.log(literalObj); //{}

// key value - 프로퍼티(속성): 값
let book = {
	title: "자바스크립트 첫걸음",
	author: "김효빈님",
	category: "자바스크립트",
	year: undefined,
	color: () => {
		console.log("orange");
	},
};
