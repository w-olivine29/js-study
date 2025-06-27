const cheeseDoll = {
	type: "cat",
	price: 15000,
	color: "yellow",
};

const { type: dollType, price, color } = cheeseDoll;

console.log(dollType);
console.log(price);
console.log(color);

console.log("==========================================================");
// Rest (나머지 매개변수) - 여러 개의 요소들을 하나의 객체나 배열로 묶어줌

// 구조분해할당을 통해 값을 꺼내고, 나머지 값들을 별도로 묶어서 할당
const { type, ...rest } = cheeseDoll;
console.log(type); //cat
console.log(rest); //{ price: 15000, color: 'yellow' }

// 여러번 작성 불가, 맨 마지막에 위치해야함
//const {  ...rest,type, } = cheeseDoll; //SyntaxError: Rest element must be last element
