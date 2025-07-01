// 전역공간

// Window: 웹 브라우저의 전역 객체로 전역 공간에 항상 존재하는 객체
// Global: 노드 환경의 전역 객체
console.log(this);

//============================================================================
// this 는 자신을 포함하고 있는 "함수가 어떻게 호출되었는가" 에 따라 값이 달라진다.

//함수
function func() {
	console.log(this); //Window
}
func();

//================================================================================
console.log("메서드"); //메서드 (객체의 프로퍼티에 저장된 함수)
const cafe = {
	brand: "mega-coffee",
	menu: "bingsu",
	print: function () {
		console.log(this);
	},
	newCafe: {
		brand: "mega-coffee",
		menu: "frappe",
		print: function () {
			console.log(this);
		},
	},
};
cafe.print(); //cafe 객체
cafe.newCafe.print(); //newCafe 객체

// 메서드지만, 메서드로서 호출된 것이 아닌, 전역 공간에서 일반 함수로서 호출
const myCafe1 = cafe.print;
myCafe1(); //Window

//========================================================================
console.log("생성자 함수"); //새로운 객체를 생성하는 특별한 메서드

function Cafe(menu) {
	console.log(this);
	this.menu = menu;
}

// new + 생성자함수
let myCafe2 = new Cafe("latte"); // Cafe 객체 바인딩
console.log(myCafe2);

// new 누락 (일반함수로써 호출)
let myCafe3 = Cafe("latte"); // Window
console.log(myCafe3); //undefined (일반 함수로써 호출했는데 반환값이 없기때문)

//========================================================================
console.log("콜백 함수");

const myCafe = {
	brand: "이디야",
	menu: "",
	setMenu: function (menu) {
		this.menu = menu;
	},
};

function getMenu(menu, callback) {
	callback(menu);
}

// myCafe의 메서드인 setMenu를 콜백함수로 넘긴 뒤 일반함수로써 호출
getMenu("츄러스", myCafe.setMenu);

//setMenu 내부의 this는 window 객체를 바인딩
console.log(myCafe); //{brand: '이디야', menu: '', setMenu: ƒ}
console.log(window.menu); //츄러스

/* 
js의 this는 함수의 호출 방식에 의해 값이 동적으로 바인딩

일반함수, 콜백함수로써 호출 -> 전역 객체 바인딩
메서드로써 호출 -> 해당 객체 바인딩
생성자함수로써 호출 -> 생성할 객체 바인딩
 */
