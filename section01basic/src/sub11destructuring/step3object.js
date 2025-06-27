let color = {
	rgb: [121, 230, 247],
	hsl: [188, 89, 72],
	code: "79e6f7",
};

let rgb1 = color.rgb;
let hsl1 = color.hsl;
let code1 = color.code;

console.log(rgb1);
console.log(hsl1);
console.log(code1);

console.log("===============================================");
//구조분해 할당 적용

// 배열은 인덱스를 이용해 순서대로 할당
// 객체는 key 값을 기준으로 변수에 할당
let { rgb, hsl, code } = color;

console.log(rgb); //[ 121, 230, 247 ]
console.log(hsl); //[ 188, 89, 72 ]
console.log(code); //79e6f7

console.log("===============================================");
// 할당할 변수가 프로퍼티 key값과 이름이 다른 경우

let { rgb: rgbColor, hsl: hslColor, code: colorCode } = color;

console.log(rgbColor); //[ 121, 230, 247 ]
console.log(hslColor); //[ 188, 89, 72 ]
console.log(colorCode); //79e6f7

// 할당할 변수의 수가 객체 프로퍼티 수보다 많을 때

let { rgb: rbgC, hsl: hslC, code: codeC, colorName = "tomato" } = color;

console.log(rbgC); //[ 121, 230, 247 ]
console.log(hslC); //[ 188, 89, 72 ]
console.log(codeC); //79e6f7
console.log(colorName); //tomato
