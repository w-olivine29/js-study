//콜백 함수 (매개변수로 전달받은 함수)
const calculate = (a, b, callback) => {
	let result = a + b;
	callback(result);
};

const printResult = (result) => {
	console.log(`[결과]: ${result}`);
};

const doubleResult = (result) => {
	console.log(`[결과 * 2]: ${result * 2}`);
};

calculate(10, 20, printResult);
calculate(10, 20, doubleResult);

// ===============================================
const testFunc = (callback) => {
	callback();
};

testFunc(function () {
	console.log("test callback function");
});

testFunc(() => {
	console.log("test callback function");
});
