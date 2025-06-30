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

/* promise.all 
여러개의 primise를 병렬로 실행 후 
모든 promise가 완료될때까지 기다렸다가 결과를 한 번에 반환

전달된 promise 배열이 모두 fulfilled 성공될 때가지 대기
하나라고 rejected 되면, 즉시 실패 상태 -> 오류 출력

독립적인 작업들을 빠르게 처리하고 싶은 경우 사용
*/

//의도) A -> B -> C 순으로 출력
const start = async () => {
	try {
		// 해당작업들을 동시 실행 (총 4초 소요)
		let results = await Promise.all([workA(4000), workB(2000), workC(1000)]);

		// 출력은 배열 순
		results.forEach((result) => {
			console.log(result);
		});
	} catch (err) {
		console.log(err);
	}
};

start();
