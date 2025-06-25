//[let] ======================
let letNum = 10;
//let letNum = 100; //Uncaught SyntaxError: Identifier 'num' has already been declared

console.log(letNum);
// let 과 const는 ES6 이후에 나옴(중복선언불가, 블록스코프)

//[var] ========================
var varNum = 10;
var varNum = 100; // 같은 이름의 변수를 선언할 수 있다. (+ 기존에 선언된 변수는 무시된다)

console.log(varNum);
// var는 중복선언가능, 함수스코프의 특징으로 예측, 파악이 어려움 (현재는 잘 안 쓰임)
