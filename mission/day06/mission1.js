/*
아래와 같은 fakeApiCall 함수가 있습니다. 이 함수는 2초 후에 사용자 정보를 반환합니다.
async와 await를 사용하여 이 API 호출을 기다리고, 사용자 이름을 콘솔에 출력하는 fetchUserData 함수를 작성하세요.
*/

function fakeApiCall() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ name: "John Doe", age: 30 });
		}, 2000);
	});
}
// =============================================

//async & await 적용 전
fakeApiCall().then((res) => console.log(res.name));

//async & await 적용
const fetchUserData = async () => {
	let result = await fakeApiCall();
	console.log(result.name);
};

fetchUserData();
