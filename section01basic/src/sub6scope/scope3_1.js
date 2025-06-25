// let, const는 블록스코프를 가진다.
function print1() {
	for (let i = 0; i < 10; i++) {
		console.log(i); // i는 for문 블럭 내부에서만 유효
	}
	//console.log(i); //ReferenceError: i is not defined
}
print1();

// var는 함수스코프를 가진다.
function print2() {
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}
	console.log(i); //같은 함수 내부이기때문에 접근 가능
}
print2();
