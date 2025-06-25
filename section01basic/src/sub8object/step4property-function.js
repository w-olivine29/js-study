const person = {
	name: "사람1",
	age: "30",

	printName: function () {
		console.log(`제 이름은 ${this.name}`);
	},

	// 사용x
	printAge: () => {
		console.log(`제 나이는 ${this.age}`);
	},
};

// 함수인 프로퍼티(메서드)는  이름()으로 접근
person.printName(); //제 이름은 사람1
person["printName"](); //제 이름은 사람1

// 함수를 객체 프로퍼티로 사용할 경우 화살표함수 사용 x -> this 섹션 참고
person.printAge(); //제 나이는 undefined
person["printAge"](); //제 나이는 undefined
