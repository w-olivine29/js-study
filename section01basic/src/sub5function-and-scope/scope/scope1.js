// [전역변수 & 지역변수]
let globalNum = 100; //전역변수, 외부변수

function testfunc() {
  let innerNum = 50; //지역변수
  console.log(globalNum);
  console.log(innerNum);
}
testfunc();
console.log(globalNum);
//console.log(innerNum); //ReferenceError: innerNum is not defined
