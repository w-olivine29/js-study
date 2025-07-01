/* innerHTML
DOM API 속성 중 하나로 특정 요소의 HTML을 문자열 형태로 읽거나 설정할 수 있음
새로운 요소를 쉽게 설정, 변경이 가능하지만 성능이나 보안 문제로 주의해서 사용해야함 (가능하면 다른 DOM API 사용)
*/

let $animalInfo = document.querySelector("div.animal-info");
console.log($animalInfo);

$animalInfo.innerHTML = '<div id="name"> 호랑이</div>';
