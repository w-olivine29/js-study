let result1 = Array.isArray([1, 2, 3, 4]);
let result2 = Array.isArray({ id: 1, color: "tomato" });
let result3 = Array.isArray("String");
let result4 = Array.isArray(undefined);

console.log(result1); //true
console.log(result2); //false
console.log(result3); //false
console.log(result4); //false
