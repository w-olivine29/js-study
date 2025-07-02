/* 다음 코드에서 regularFunction과 arrowFunction이 있습니다.
두 함수 모두 this가 어떻게 작동하는지 확인하기 위해 각각 this.value를 출력하려고 합니다.
각 함수의 this가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정하세요. 
(주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!) */

const obj = {
	value: 42,
	regularFunction: function () {
		console.log(this.value); // 여기서 this는 무엇을 가리키나요? -> obj객체
	},
	arrowFunction: () => {
		console.log(this.value); // 여기서 this는 무엇을 가리키나요? -> 전역 객체
	},
};

obj.regularFunction(); // 출력: 42

obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)

/* undefined 로 출력된 이유

arrowFunction은 화살표 함수이기때문에, 
해당 함수가 위치한 obj의 상위 객체를 바인딩

console.log(this.value); 
-> Window 객체의 value 라는 프로퍼티에 접근하는 것인데, 현재 존재하지 않는 프로퍼티이기때문에 undefined

*/
