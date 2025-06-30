const workA = () => {
	globalThis.setTimeout(() => {
		console.log("workA");
	}, 5000);
};
const workB = () => {
	globalThis.setTimeout(() => {
		console.log("workB");
	}, 3000);
};
const workC = () => {
	globalThis.setTimeout(() => {
		console.log("workC");
	}, 10000);
};

const workD = () => {
	console.log("workD");
};

workA();
workB();
workC();
workD(); // 동기함수여서 가장 먼저 수행완료

// 출력순서) workD -> workB -> workA -> workC
