// mission1_comment의 코드 -> 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정

const obj = {
	value: 42,
	regularFunction: function () {
		console.log(this.value);
	},

	// 일반 함수로 변경
	arrowFunction: function () {
		console.log(this.value);
	},
};

obj.regularFunction();
obj.arrowFunction();
