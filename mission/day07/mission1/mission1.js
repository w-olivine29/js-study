/* 요구사항) "버튼" 클릭 시 "텍스트 요소의 내용을 변경"하는 함수를 작성
가져와야할 요소 -> 버튼, 텍스트 요소 */

let $text = document.querySelector("p#text");
let $button = document.querySelector("button#changeTextButton");

$button.addEventListener("click", () => {
	$text.textContent = "버튼을 누르셨습니다";
	$text.style.color = "tomato";
	$text.style.fontSize = "30px";
});
