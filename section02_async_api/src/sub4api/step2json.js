let requestUrl = "https://jsonplaceholder.typicode.com/posts";

/* 
fetch 호출 성공 시 첫 번째 then에서 받는 Response 객체는 응답 자체에 대한 정보(상태 코드, 헤더 등)를 담고 있습니다. 
실제 응답 본문 데이터는 `.json()`, `.text()` 등 추가적인 비동기 메서드를 호출하여 추출해야 합니다.
 이 과정도 Promise를 반환합니다.
*/
const getData = async () => {
	try {
		let response = await fetch(requestUrl); //응답 자체에 대한 정보를 담고있음
		let data = await response.json(); //response에 담긴 값을 파싱 -> js가 활용할 수 있는 객체 형태로 변환

		console.log(response);
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

getData();
