/*
아래의 API 주소는 포켓몬들의 정보가 담겨있는 data를 반환합니다. 
주어진 API 주소를 사용해, 아래의 조건을 모두 만족하는 코드를 작성하세요.

try/catch를 사용한 에러 핸들링
async/await을 사용한 비동기 처리
받아온 데이터들 중 "color 값이 green"인 포켓몬의 정보들이 담긴 배열을 출력하세요.
출력 결괏값 :
 (이상해씨, 이상해풀, 이상해꽃, 캐터피, 단데기, 모다피, 우츠동, 우츠보트, 스라크의 정보가 담긴 9개의 객체들이 모인 배열)
*/

const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

// 다른 색도 궁금해서 color를 동적으로 받게끔 했습니다.
const getMonsters = async (color) => {
	try {
		let response = await fetch(API_URL);
		let jsonData = await response.json();
		return jsonData.data.filter((monster) => monster.color === color);
	} catch (err) {
		console.log(err);
	}
};

// 결과값을 바로 출력할 때 (async 메서드 내부가 아닌 경우)
// then을 사용해야 완료된 실제 결과값을 받아서 출력 가능
getMonsters("green").then((monsters) => console.log(monsters));

getMonsters("red").then((monsters) => console.log(monsters));
getMonsters("blue").then((monsters) => console.log(monsters));

//추가 =====================================================================

//원하는 색의 몬스터그룹들을  병렬로 처리

const printMonsterGroups = async (...monsters) => {
	let groups = await Promise.all(monsters);

	groups.forEach((group) => {
		console.log(group);
	});
};

printMonsterGroups(
	getMonsters("red"),
	getMonsters("green"),
	getMonsters("yellow")
);
