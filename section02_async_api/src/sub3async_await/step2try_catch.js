const delay = (ms) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`${ms / 1000}초가 지났습니다.`);
		}, ms);
	});
};

//try문 내부에서 에러 발생 시 catch문으로 진입
const start = async (ms) => {
	try {
		let result = await delay(ms);
		console.log(result);
	} catch (err) {
		console.log(err);
	}
};

start(6000);
console.log(1);
