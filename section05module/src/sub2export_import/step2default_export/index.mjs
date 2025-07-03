// export default 를 import 해올 때
// 중괄호나 as 키워드 없이 가져온 식별자를 나타내는 이름 작성
import testModule from "./test.mjs";

console.log(new testModule("default export 입니다"));
