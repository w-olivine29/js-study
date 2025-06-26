//includes(searchElement: T, fromIndex?: number): boolean;

let colors = ["tomato", "skyblue", "black"];

console.log(colors.includes("tomato")); //true
console.log(colors.includes("tomatoto")); //false

console.log(colors.includes("tomato", 0)); //true
console.log(colors.includes("tomato", 1)); //false
