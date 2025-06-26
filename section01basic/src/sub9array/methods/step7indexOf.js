//indexOf(searchElement: T, fromIndex?: number): number;
// 특정요소가 배열의 몇 번째 인덱스인지 찾아준다

let colors = ["tomato", "skyblue", "black"];

console.log(colors.indexOf("tomato")); //0
console.log(colors.indexOf("tomatoto")); //-1

console.log(colors.indexOf("tomato", 0)); //0
console.log(colors.indexOf("tomato", 2)); //-1
