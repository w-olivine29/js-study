const print1 = (a, b, c, d, e, f) => {
	console.log([c, d, e, f]);
};

print1(1, 2, 3, 4, 5, 6); //[ 3, 4, 5, 6 ]

console.log("============================================");
// rest 매개변수는 가변 인수를 배열로 받을 때 사용한다

const print2 = (a, b, ...rest) => {
	console.log([...rest]);
};

print2(1, 2, 3, 4, 5, 6, 7, 8); //[ 3, 4, 5, 6, 7, 8 ]
