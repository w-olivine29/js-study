// 비동기 함수들 정의
const workA = (value, callback) => {
	setTimeout(() => {
		callback(value + 5);
	}, 5000);
};
const workB = (value, callback) => {
	setTimeout(() => {
		callback(value - 3);
	}, 3000);
};
const workC = (value, callback) => {
	setTimeout(() => {
		callback(value + 10);
	}, 10000);
};

//의도) A-> B -> C 순으로 출력되게끔 해보기
// 여러 작업을 비동기로 처리해도 작업을 원하는 순서대로 처리할 수 있음
// 비동기 함수의 특정 결과 값을 다른 비동기 함수에서 그대로 사용할 수 있다

workA(10, (resultA) => {
	console.log(`workA: ${resultA}`);

	// workA의 메인로직 수행 후 비동기인 workB를 수행
	workB(resultA, (resultB) => {
		console.log(`workB: ${resultB}`);

		// workB의 메인로직 수행 후 비동기인 workC를 수행
		workC(resultB, (resultC) => {
			console.log(`workC: ${resultC}`);
		});
	});
});

//js에서 비동기 함수의 결과 값을 또 다른 비동기 함수에서 사용하기 위해서는 다음과 같이 콜백 함수 안에 콜백 함수를 전달하는 방식으로 작성해주어야함

// 이러한 연속된 중첩 구조(꺽쇠 모양)로 이뤄진 코드를 콜백지옥이라고 한다
// 프로미스 객체를 사용하는 이유는 비동기 처리 방식의 문제점 중 하나인 콜백 지옥을 해결할 수 있다

/*
콜백 지옥의 문제점:
1. 가독성 저하 - 꺽쇠(>) 모양의 깊은 중첩 구조
2. 유지보수 어려움 - 코드 수정 시 복잡함
3. 에러 처리 복잡 - 각 단계마다 에러 처리 필요
4. 디버깅 어려움 - 실행 흐름 파악 힘듦

해결책: Promise, async/await 사용
*/
