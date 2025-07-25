/* 미션1. spread와 rest
sumAndDouble이라는 함수를 작성하세요. 이 함수는 여러 개의 숫자를 인자로 받아:

Rest 연산자를 사용하여 모든 인자를 하나의 배열로 받습니다.
받은 숫자들을 모두 더합니다.
배열의 모든 숫자에 2를 곱한 새로운 배열을 반환합니다. (배열 메서드 map을 사용하세요.) */

const sumAndDouble = (...nums) => {
	return nums.map((num) => {
		return num * 2;
	});
};

console.log(sumAndDouble(...[1, 2, 3, 4])); //[ 2, 4, 6, 8 ]
