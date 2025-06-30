const workA = (ms) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("workA");
		}, ms);
	});
};

const workB = (ms) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("workB");
		}, ms);
	});
};

const workC = (ms) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("workC");
		}, ms);
	});
};

//의도) A -> B -> C 순으로 출력
const start = async () => {
	try {
		// 순차 실행
		let resultA = await workA(4000);
		let resultB = await workB(2000);
		let resultC = await workC(1000);
		// 총 7초소요

		console.log(resultA);
		console.log(resultB);
		console.log(resultC);
	} catch (err) {
		console.log(err);
	}
};
// 이전 결과가 다음 작업에 필요한 경우 적용

start();
