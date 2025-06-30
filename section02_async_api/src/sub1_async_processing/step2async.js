//function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number

//===============================================================
setTimeout(() => {
	console.log("비동기");
}, 3000); //3초 후에 인수로 넘긴 콜백함수를 실행

// setTimeOut이 수행완료되기 전에 해당 코드로 넘어와서 수행
console.log("종료");

// 출력순서) 종료 -> 비동기

//===============================================================
// 비동기 함수 수행 뒤에 수행하고 싶을 때

setTimeout(() => {
	console.log("비동기");
	console.log("종료");
}, 3000);

// 출력순서) 비동기 -> 종료

//===============================================================

const work = (callback) => {
	setTimeout(() => {
		console.log("비동기");
		callback;
	}, 3000);
};

work(() => {
	console.log("종료");
});

// 출력순서) 비동기 -> 종료
