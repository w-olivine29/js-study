// 비동기 처리 작업은 항상 작업 처리의 성공 여부에 따라 함수를 다르게 호출해야한다.

const executor = (resolve, reject) => {
	setTimeout(() => {
		resolve("성공"); // 작업 성공 시 호출
		reject("실패"); // 작업이 실패 시 호출
	}, 3000);
};

// 프로미스 객체 생성
//new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
const promise = new Promise(executor);

// 콜백함수에 전달된 값은 Promise 객체의 then이라는 메서드를 사용하여 수행

// 방법 1: then의 두 번째 인수로 에러 처리
promise.then(
	(result) => {
		console.log(result);
	},
	(err) => {
		console.log(err);
	}
);

// 방법 2: then과 catch를 체이닝 (권장)
//// catch() 는 해당 함수가 실패했을 때 자동으로 실행되는 함수
promise

	//작업이 성공했을 때 호출되는 resolve 함수에 전달된 성공이라는 값은 then을 통해 가져올 수 있음
	.then((result) => {
		console.log(result);
	})

	//작업이 실패했을 때 호출되는 reject의 함수에 전달 된 샐패라는 값은 catch함수를 통해 가져올 수 있음
	.catch((err) => {
		console.log(err);
	});
