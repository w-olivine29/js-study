//innerHTML 사용

const API_URL = "https://animal-api-two.vercel.app/";

let $content = document.querySelector("div.content");
let template = [];

const getData = async () => {
	let response = await fetch(API_URL);

	try {
		if (response) {
			let data = await response.json();
			data.photos.forEach((element) => {
				template += `<img src= ${element.url}></img>`; //배열에 복합대입연산자?
			});
			$content.innerHTML = template;
			checkTemplate();
		}
	} catch (err) {
		console.log(err);
	}
};

getData();

// 배열에 복합대입연산자를 사용하는걸 보고 의문이 들어서 형태를 출력해보려했는데, template가 배열이 아닌 상태
function checkTemplate() {
	console.log(template, `길이: ${template.length}`); // 2207 (문자열 한 개의 길이가 출력)

	//TypeError: template.forEach is not a function
	template.forEach((value, index) => {
		console.log(`${index} - ${value}`);
	});
}
