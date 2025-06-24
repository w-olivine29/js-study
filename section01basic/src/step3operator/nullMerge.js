console.log("\n[null 병합 연산자]");

/*  A ?? B 
-> A가 null이거나 undefined일 경우 B 반환
-> 아닐 경우 A 반환

null 병합 연산자는 주로 변수의 기본값을 할당하고 싶을 때 사용
*/

let num1;
let num2 = 10;

console.log(num1 ?? 20); //20
console.log(num2 ?? 20); //10
