function add(num1, num2) {
  return num1 + num2;
  console.log("호출"); // 해당 코드 도달x
}

let num1 = 1;
let num2 = 2;

console.log(`${num1}과 ${num2}를 더한 결과는 ${add(num1, num2)} 입니다.`);

// [early return pattern] ======================================
function compare(num) {
  if (num === 0) {
    return "num의 값이 0입니다.";
  }

  if (num < 0) {
    return "num의 값은 음수입니다. ";
  }

  if (num > 0) {
    return "num의 값은 양수입니다.";
  }

  return "숫자가 아닙니다.";
}

console.log(compare(0));
console.log(compare(10));
console.log(compare(-1));
console.log(compare("숫자"));
