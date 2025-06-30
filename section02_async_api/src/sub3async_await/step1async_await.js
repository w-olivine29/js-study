const delay = (ms) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`${ms / 1000}초가 지났습니다.`);
		}, ms);
	});
};

/* async
비동기를 수행할 함수에 작성 -> 직관적 해석 가능
 async 키워드 사용 시 해당 함수는 항상 "자동으로 Promise 객체 반환"
*/

/* await
키워드는 async 키워드가 작성된 함수의 내부에서 사용하는 키워드
프로미스 객체가 처리완료될 때까지 함수의 실행을 기다리게 함
*/
const start = async (ms) => {
	let result = await delay(ms); // 해당 작업이 종료될 때까지 동일 함수 내의 프로그램의 실행이 중단

	console.log(result);
};

start(6000);
console.log(1);
