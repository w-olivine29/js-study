// select 태그 생성
let $select = document.createElement("select");
$select.id = "skills";

//option 종류
let options = [
	{ text: "Javascript", value: "javascript" },
	{ text: "Next.js", value: "next" },
	{ text: "React.js", value: "react" },
	{ text: "TypeScript", value: "typescript" },
];

// option 태그 생성 & select 태그 하위에 추가
options.forEach((element) => {
	let $option = document.createElement("option");
	$option.value = element.value;
	$option.textContent = element.text;

	$select.appendChild($option);
});

// select 태그를 div#app 하위에 추가
let $div = document.querySelector("div#app");
$div.appendChild($select);

// select 태그의 값을 변경할 때 마다, 변경된 값을 출력
$select.addEventListener("change", (event) => {
	console.log(event.target.value);
});
