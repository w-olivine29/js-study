// 함수 호이스팅 ================================================

// 함수가 선언되기 이전의 위치에서 호출 가능
// 자바스크립트 엔진이 코드 해석과정에서 선언문을 더 먼저 작성된 코드로 해석했기때문 (호이스팅)
connectStrings("study", "hoisting");

function connectStrings(str1, str2) {
	console.log(str1 + str2);
}

// 변수 호이스팅 ================================================

//console.log(letNum); //ReferenceError: Cannot access 'letNum' before initialization
let letNum = 10;

console.log(varNum); //undefined
var varNum = 10;
