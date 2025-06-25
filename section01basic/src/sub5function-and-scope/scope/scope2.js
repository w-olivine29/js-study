// [전역변수 & 지역변수]
let global = "전역변수";

function outerFunction() {
  let outer = "외부 함수 변수";

  //중첩 함수(내부함수)
  function innerFunction() {
    let inner = "내부 함수 변수";
    console.log(global);
    console.log(outer);
    console.log(inner);
  }

  innerFunction();
  console.log(global);
  console.log(outer);
  //console.log(inner); //ReferenceError: inner is not defined
}

outerFunction();
console.log(global);
// console.log(outer); //ReferenceError: outer is not defined
// console.log(inner); //ReferenceError: inner is not defined
