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
				template.push(`<img src= ${element.url} alt=${element.name}/>`);
			});

			// template 를 그대로 넣으면 화면에 이미지,이미지,이미지 형태로 랜더링
			$content.innerHTML = template.join(" ");

			checkTemplate();
		}
	} catch (err) {
		console.log(err);
	}
};

getData();

function checkTemplate() {
	console.log(template, `길이: ${template.length}`);

	template.forEach((value, index) => {
		console.log(`${index} - ${value}`);
	});
}
