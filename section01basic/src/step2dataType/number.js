//type of

let num = 10;
console.log(typeof num); // number

// Number) 정수, 소수, Infinity, NaN

// 정수&소수
console.log("[Number] - 정수 & 소수 =================");
let num1 = 123;
let num2 = 1.23;
console.log(typeof num1); // number
console.log(typeof num2); // number

// 자바스크립트는 0으로 나누거나, 부정확한 연산을 해도 에러 발생 X -> Infinity, NaN 반환
//Infinity
console.log("[Number] - Infinity =================");
let infinityNum1 = Infinity;
let infinityNum2 = 100 / 0;

console.log(typeof infinityNum1); // number
console.log(typeof infinityNum2); // number
console.log(infinityNum1); //Infinity
console.log(infinityNum2); //Infinity

// NaN (Not a Number)
console.log("[Number] - NaN =================");
let NaN1 = NaN;
console.log(typeof NaN1); //Number
console.log(NaN1); //NaN

// 부정확한 연산을 하는 경우 반환되는 값이기도 하다
let NaN2 = "js" / 10;
console.log(typeof NaN2); //number
console.log(NaN2); //NaN
