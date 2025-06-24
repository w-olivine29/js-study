console.log("\n[비교 연산자]");

// intro ======================================================
let numberNum = 10;
let strNum = "10";

// "==" 의 경우 값이 같은지에 집중 (타입을 바꿔서라도 값이 같은지 확인)
console.log(numberNum == strNum); // true   (Not Good)
console.log(numberNum != strNum); //  false

// "===" 값, 타입 모두 같아야함
console.log(numberNum === strNum); // false   (Good)
console.log(numberNum !== strNum); // true

// practice ===============================================
let strTrue = "true";
let strFalse = "false";

let booleanTrue = true;
let booleanFalse = false;

let numberTrue = 1;
let numberFalse = 0;

console.log("[String & Boolean]");
console.log("'true' == true: " + (strTrue == booleanTrue)); // -> false ????
console.log("'true' === true: " + (strTrue === booleanTrue)); // -> false
console.log("");
console.log("'false' == false: " + (strFalse == booleanFalse)); // -> false ????
console.log("'false' === false: " + (strFalse === booleanFalse)); // -> false
console.log("");

/*  "==" 연산에서 false가 나온 이유
    String과 Boolean은 둘 다 Number로 형변환 시도되면서
    boolean은 0이나 1, strBoolean은 NaN  -> 비교시 false */

console.log("[Boolean & Number]");
console.log(" true == 1: " + (booleanTrue == numberTrue)); // -> true
console.log(" true === 1: " + (booleanTrue === numberTrue)); // -> false
console.log("");
console.log("false == 0: " + (booleanFalse == numberFalse)); // -> true
console.log("false === 0: " + (booleanFalse === numberFalse)); // -> false
console.log("");
console.log();

console.log("[String & Number]");
console.log("'true' == 1: " + (strTrue == numberTrue)); // -> false
console.log("'true' === 1: " + (strTrue === numberTrue)); // -> false
console.log("'false' == 0: " + (strFalse == numberFalse)); // -> false
console.log("'false' === 0: " + (strFalse === numberFalse)); // -> false

//"true" -> Number 형변환 시도 -> NaN == boolean  -> false

//===================================================================
console.log("[String & String]");

let str1 = "문자";
let str2 = "문자";
console.log(str1 == str2); //true

let newStr1 = new String("문자");
let newStr2 = new String("문자");
console.log(newStr1 == newStr2); //false
console.log(newStr1 === newStr2); //false

// 대소 비교연산자 ==================================================
console.log("[대소 비교]");
let a = 10;
let b = 20;
let c = 10;

console.log(a > b); // false
console.log(a < b); // true
console.log(a <= c); // true
console.log(a > c); // false
