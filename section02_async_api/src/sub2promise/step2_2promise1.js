// 비동기 함수들 정의
// 정상값만 확인할 것이기 때문에 executor 에는 resolve만 넘기게끔 하였음
const workA = (value) => {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(value + 5);
		}, 5000);
	});

	return promise;
};
const workB = (value) => {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(value - 3);
		}, 3000);
	});

	return promise;
};

const workC = (value) => {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(value + 10);
		}, 3000);
	});

	return promise;
};

//의도) A-> B -> C 순으로 출력되게끔 해보기
workA(10).then((resultA) => {
	console.log(`workA: ${resultA}`);

	workB(resultA).then((resultB) => {
		console.log(`workB: ${resultB}`);

		workC(resultB).then((resultC) => {
			console.log(`workC: ${resultC}`);
		});
	});
});

//promise 를 적용했지만 적용 전과 큰 차이는 없어보인다. (여전히 중첩구조)
