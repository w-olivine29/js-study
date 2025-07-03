/* 방식1: 개별 export 방식 

export let num = 35;

export function add(num1, num2) {
	return num1 + num2;
}

export function User(name) {
	this.name = name;
} 
*/

// 방식 2: 일괄 export (named export)
// 개별 export 시 일괄 export에 추가는 못함 (중복 export 에러)
let num = 35;

function add(num1, num2) {
	return num1 + num2;
}

function User(name) {
	this.name = name;
}

export { num, add, User };
