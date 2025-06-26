// reduce 사용 전
let nums = [1, 5, 7, 0, 3, 10, 2, 2];
let sum = 0;
nums.forEach((num) => {
	sum += num;
});

console.log(sum + "\n"); //30

//reduce:  배열의 모든 요소를 하나의 값으로 축약(누적)하는 메서드

//reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;

//accumulator: 콜백 함수의 반환값을 누적하는 매개변수
//currentValue: 계속 사용했었던 현재 처리할 요소의 값
nums.reduce((acc, cur, idx) => {
	console.log(acc, cur, idx);

	return acc + cur;
}, 0);
console.log();

nums.reduce((acc, cur) => {
	return acc + cur;
}, 10);
