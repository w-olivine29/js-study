let book = {
	title: "자바스크립트 첫걸음",
	author: "김효빈님",
	category: "자바스크립트",
	year: undefined,
	color: () => {
		console.log("orange");
	},
};

// 점 표기법
console.log(book.title);
console.log(book.author);
console.log(book.category);

// 괄호 표기법 - 동적으로 키에 접근해야 할 때 사용
console.log("\n[괄호 표기법]");

console.log(book["title"]);
console.log(book["author"]);
console.log(book["category"]);

const getValue = (key) => {
	console.log(book[key]);
};

getValue("title");
