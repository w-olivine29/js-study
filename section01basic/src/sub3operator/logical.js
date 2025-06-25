console.log("\n[논리 연산자]");

//false -> true, true -> false
let isClicked = true;
let isOpened = false;

console.log(!isClicked); // true -> false
console.log(!isOpened); // false -> true

//===============================================================
console.log("[booealn & booealn - or 연산자 ]");

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log("[booealn & booealn - and 연산자]");

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// ================================================================

// &&연산의 경우 반드시 뒤의 값까지 읽는다.
// ||연산의 경우 앞의 값이 truthy일 경우 뒤의 값은 읽지 않는다.

/* 
정적 타입 언어들의 논리연산자의 결과의 경우 boolean 타입만은 반환하는 반면
JS의 비교연산자에서는 마지막으로 읽힌 값의 타입을 유지하게 된다
*/

console.log("[boolean & 0, 1 - or 연산자]");
console.log(true && 1); //1
console.log(1 && true); //true

console.log("[boolean & 0, 1 - and 연산자]");
console.log(true || 1); //true
console.log(1 || true); //1 (앞의 값이 Truthy이기 때문에 1을 반환  - truthy, falsy 개념 참고)

console.log("[string]");
console.log(typeof ("true" || 1)); //string
console.log("coffee" || "tea"); //coffee
console.log("coffee" && "tea"); //tea
