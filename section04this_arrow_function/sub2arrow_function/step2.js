// 객체 리터럴

const cafe = {
	brand: "이디야",
	menu: "츄러스",

	// 화살표 함수 내의 this는 자신을 포함하고 있는 함수가 선언된 위치의 상위 스코프 참조
	// print 함수는 cafe 객체에 선언 상태 -> cafe 객체의 상위 스코프 -> Window
	print: () => {
		console.log(this);
	},
};

cafe.print(); //Window
