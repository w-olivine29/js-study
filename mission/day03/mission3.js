//미션3. 스코프와 함수
//두 숫자 a와 b를 인자로 받아, b에 5를 더한 값을, a에 더한 결과를 반환하는 sumNumbers 함수를 작성하세요.

function sumNumbers(a, b) {
	function addFive(number) {
		return number + 5;
	}

	return a + addFive(b);
}

console.log(sumNumbers(10, 10)); //(10+5)+ 10 => 25
console.log(sumNumbers(5, 10)); //(10+5)+5 => 20
