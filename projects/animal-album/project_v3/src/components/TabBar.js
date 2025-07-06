// tab bar 컴포넌트를 나타내는 함수 하나를 모듈로써 내보냄

export default function TabBar({ $app, initialState, onClick }) {
	this.state = initialState;
	this.onClick = onClick;

	this.$target = document.createElement("div");
	this.$target.className = "tab-bar";
	$app.appendChild(this.$target);

	this.template = () => {
		let temp = `<div id="all">전체</div>
       <div id="penguin">펭귄</div><div id="koala">코알라</div><div id="panda">판다</div>`;

		return temp;
	};

	// DOM 업데이트, 이벤트리스너 재등록
	this.render = () => {
		// template ->  div#app인 요소에 추가
		this.$target.innerHTML = this.template();

		let $cureentTab = document.getElementById(this.state); // 현재 상태인 요소
		$cureentTab && ($cureentTab.className = "clicked"); // 클릭요소를 다른 요소와 className으로 구분 -> 클릭요소의 cssa만 다르게 적용

		// 각 요소에 이벤트리스너 추가
		const $tabBar = this.$target.querySelectorAll("div");
		$tabBar.forEach((element) => {
			element.addEventListener("click", () => {
				onClick(element.id);
			});
		});
	};

	this.setState = (newState) => {
		this.state = newState;
		this.render();
	};
}
