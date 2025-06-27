// 두 변수의 값 교환
let a = 10;
let b = 5;
let tmp;

tmp = a;
a = b;
b = tmp;

console.log(a); //5
console.log(b); //10

console.log("============================");
//구조 분해 할당 적용
a = 10;
b = 5;

[a, b] = [b, a];

console.log(a); //5
console.log(b); //10
