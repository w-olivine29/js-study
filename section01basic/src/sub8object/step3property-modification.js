// const는 참조값을 고정시키는 것이기때문에
// 참조 중인 객체의 내부 프로퍼티를 추가, 수정하는 것은 가능
const cat = {
	age: 2,
};

// 프로퍼티 추가 ===============================================
cat.name = "치즈";
cat["color"] = "yellow";

console.log(cat); //{ age: 2, name: '치즈', color: 'yellow' }

//프로퍼티 값 수정================================================
cat.name = "서리태";
cat["color"] = "black";
console.log(cat); //{ age: 2, name: '서리태', color: 'black' }

// cat의 참조값 자체를 재할당하려한 것이기 때문에 에러발생
//TypeError: Assignment to constant variable.
// cat = {
// 	age: 3,
// };

//프로퍼티 삭제 =======================================================
delete cat.age;
console.log(cat); //{ name: '서리태', color: 'black' }

delete cat["color"];
console.log(cat); //{ name: '서리태' }
