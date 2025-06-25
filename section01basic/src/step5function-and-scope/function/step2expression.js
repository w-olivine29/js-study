// 함수 표현식
const add1 = function (num1, num2) {
	return num1 + num2;
};

console.log(add1(10, 20));

// 화살표 함수
// 값을 반환하는 코드 하나만 있다면 {} 과 return 생략 가능
const add2 = (num1, num2) => num1 + num2;
console.log(add2(10, 20));
