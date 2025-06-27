let colors = ["tomato", "skyblue", "violet"];

let c1 = colors[0];
let c2 = colors[1];
let c3 = colors[2];

console.log(c1);
console.log(c2);
console.log(c3);

console.log("=============================================");
//구조분해 할당 적용 후

let [color1, color2, color3] = colors;

console.log(color1); //tomato
console.log(color2); //skyblue
console.log(color3); //violet

console.log("=============================================");
// 선언 분리 할당
let num1, num2, num3;

[num1, num2, num3] = [1, 2, 3];

console.log(num1);
console.log(num2);
console.log(num3);

console.log("==============================================");
//배열길이와 상이할 때

console.log("할당할 변수의 개수가 배열 길이보다 적을 때");
// 할당은 배열 순서대로 이뤄짐 (변수 개수에 맞게 순차적으로 할당)
let [a, b] = ["tomato", "skyblue", "indigo"];

console.log(a); //tomato
console.log(b); //skyblue

console.log("할당할 변수의 개수가 배열 길이보다 많을 때");
let [aa, bb, cc] = ["tomato", "skyblue"];

console.log(aa); //tomato
console.log(bb); //skyblue
console.log(cc); //undefined
console.log();

//기본 값 할당
let [aaa, bbb, ccc = "indigo"] = ["tomato", "skyblue"];

console.log(aaa); //tomato
console.log(bbb); //skyblue
console.log(ccc); //indigo
