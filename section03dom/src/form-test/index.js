// 이벤트 추가
let $fruitSelect = document.querySelector("select#fruitSelect");

$fruitSelect.addEventListener("change", (event) => {
	console.log(event.target.value);
});

// 특정 값 삭제
$fruitSelect.remove(0); // 해당 select 내의 0번째 option 요소 삭제

//==================================================================

const $username = document.querySelector("input#username");
const $password = document.querySelector("input#password");

const $loginBtn = document.querySelector("button");

// 버튼이 클릭될때마다 아이디, 비밀번호 출력
$loginBtn.addEventListener("click", () => {
	console.log($username.value);
	console.log($password.value);
});

// 직접 특정 input 태그의 값 변경
$username.value = "게스트";

// 특정 input 태그에 값이 입력될때마다 출력
$password.addEventListener("input", (event) => {
	console.log(event.target.value);
});
