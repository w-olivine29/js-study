let $button = document.createElement("button");
$button.id = "new-button";
$button.classList.add("new-button");

$button.textContent = "버튼";

//클래스이름이 animal-info인 요소의 자식노드로 추가
let $animalInfo = document.querySelector("div.animal-info");
$animalInfo.appendChild($button);

// 요소에 이벤트 추가, 수행할 함수를 지정
$button.addEventListener("click", () => {
	window.alert("버튼입니다");
});
