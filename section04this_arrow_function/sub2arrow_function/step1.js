function Counter1() {
	this.count = 0;

	// 함수를 콜백함수로 넘긴 상황 -> setInterval 함수 내부에서 일반 함수로서 호출 -> 전역객체 바인딩
	setInterval(function () {
		this.count++; // 전역객체 바인딩 -> count 라는 프로퍼티는 추가됐는데, 0으로 할당하지 않은 상태에서 1을 더하는 상황 -> NaN
		console.log(this.count);
	}, 2000);
}
const counter1 = new Counter1(); //NaN 이 2초마다 출력

//========================================================================
/* 
화살표 함수의 this는 함수의 호출방식이 아닌 함수가 정의된 시점에서 상위 스코프의 this를 참조
함수가 선언된 위치에 따라 scope가 결정 -> Lexical Scope (자바스크립트가 식별자의 스코프를 결정하는 방법)

화살표함수는 어떻게 호출되었는가가 아닌 "어디에 선언되었는가"
 */
function Counter2() {
	this.count = 0;

	// 화살표함수를 setInterval 함수 내부에 선언 -> setInterval 메서드 내부를 기준으로 상위 스코프 참조
	// setInterval 메서드의 상위 스코프 -> Counter 함수 참조
	setInterval(() => {
		this.count++;
		console.log(this.count);
	}, 2000);
}
const counter2 = new Counter2(); // 숫자 1씩 잘 증가되고있음
