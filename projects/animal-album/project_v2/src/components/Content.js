// content 컴포넌트를 나타내는 함수 하나를 모듈로써 내보냄
export default function Content({ $app, initialState }) {
	this.state = initialState;
	this.$target = document.createElement("div");
	this.$target.className = "";
	$app.appendChild(this.$target);

	// 재랜더링 할 요소
	this.template = () => {
		let temp = "";
		if (this.state) {
			this.state.forEach((element) => {
				temp += `<img src="${element.url}"></img>`;
			});
		}

		return temp;
	};

	// DOM 업데이트
	this.render = () => {
		this.$target.innerHTML = this.template();
	};

	this.setState = (newState) => {
		this.state = newState;
		this.render();
	};

	this.render();
}
