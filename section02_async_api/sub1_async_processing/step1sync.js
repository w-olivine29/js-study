const workA = () => {
	console.log("workA");
};
const workB = () => {
	console.log("workB");
};
const workC = () => {
	console.log("workC");
};

// 동기 처리 (순차적으로 수행)
workA();
workB();
workC();
