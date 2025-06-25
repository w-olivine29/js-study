//미션2. 함수 작성하기
//책의 제목과 저자 이름을 속성으로 가진 book 객체를 만들고, 책의 정보를 반환하는 getSummary 메서드를 작성하세요.

const book = {
	title: "제목",
	author: "저자",
	getSummary: function () {
		return `title: ${this.title}, author: ${this.author}`;
	},
};

console.log(book.getSummary());
console.log(book["getSummary"]());
