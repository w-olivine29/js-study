const rainbowColor = ["red", "orange", "yellow", "green"];

const [c1, c2, ...rest] = rainbowColor;

console.log(c1); //red
console.log(c2); //orange
console.log(rest); //[ 'yellow', 'green' ]
