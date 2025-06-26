let arr = [1, 2, 3, 4, 5, 6];

//for of문
for (let i of arr) {
	console.log(i);
}

//====================================================

let person = { name: "사람1", age: 30, height: 163 };

//for in 문 (주로 객체에서 사용)
for (let key in person) {
	console.log(`key: ${key}, value: ${person[key]}`);
}
