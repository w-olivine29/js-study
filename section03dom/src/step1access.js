/* document
document 객체는 브라우저 환경에서만 존재 
DOM(Document Object Model) 의 일부로서 웹페이지 구조를 조작하기 위한 객체

Node.js 서버환경에서는
기본적으로는 ducument, window, navigator 등의 브라우저 전용 객체 사용 불가

실행해보면 ReferenceError: document is not defined 라고 뜨는 것을 볼 수 있다.
*/

/* 
DOM API를 사용해서 특정 요소를 변수에 할당 시
변수이름 앞에 $ 기호를 붙이거나 접미사로 element 라고 작성
*/

//===================================================================================

// getElementById: id 값을 통해 특정 요소의 객체 값 반환
let $color = document.getElementById("color");
console.log($color);

//getElementsByClassName
console.log(document.getElementsByClassName("info-item"));

//getElementByTagName: 요소들의 태그 네임을 통해 요소들을 찾을 수 있다
//태그: div, img, button 같은 HTML 요소들
console.log(document.getElementsByTagName("div"));

//===================================================================================

// querySelector: 특정요소의 id가 아닌 css 선택자로 요소 노드를 반환
// 특정 요소의 태그 이름.클래스이름
// 특정 요소의 태그 이름#아이디이름
let $animalInfo = document.querySelector("div.animal-info");
let $animalAge = document.querySelector("div#age");

console.log($animalInfo);
console.log($animalAge);

//querySelectorAll
console.log(document.querySelectorAll("div.info-item"));
