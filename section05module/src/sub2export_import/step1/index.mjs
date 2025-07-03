/* 방식 1: 개별 import (destructuring)
import { num, add, User } from "./test.mjs"

 console.log(num);
 console.log(add(1, 2));
 console.log(new User("자바스크립트"));
  */

// 방식2: 네임스페이스 import
// 모든 export를 하나의 객체로 묶어서 가져온다.
// 네임스페이스로 구분되어 충돌 방지
import * as testModule from "./test.mjs";

console.log(testModule.num);
console.log(testModule.add(1, 2));
console.log(new testModule.User("자바스크립트"));
