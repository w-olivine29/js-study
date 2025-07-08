//생성자의 파라미터는 구조 분해 할당으로 받아오는 것임
export default function RegionList({ $app, initialState, handleRegion }) {
	this.state = initialState;
	this.handleRegion = handleRegion;

	this.$target = document.createElement("div");
	this.$target.className = "region-list";

	$app.appendChild(this.$target); //DOM에 추가

	this.template = () => {
		const regionList = [
			"🚀 All",
			"🌏 Asia",
			"🕌 Middle-East",
			"🇪🇺 Europe",
			"💃 Latin-America",
			"🐘 Africa",
			"🏈 North-America",
			"🏄 Oceania",
		];
		let temp = ``;
		regionList.forEach((elm) => {
			let regionId = elm.split(" ")[1];
			temp += `<div id=${regionId}>${elm}</div>`;
		});
		return temp;
	};
	this.render = () => {
		this.$target.innerHTML = this.template(); //DOM에 추가

		// 현재 선택된 지역에 스타일 적용
		if (this.state) {
			let $currentRegion = document.getElementById(this.state);
			$currentRegion && ($currentRegion.className = "clicked");
		} else {
			document.getElementById("All").className = "clicked";
		}
		// 이벤트 리스너 작업
		this.$target.querySelectorAll("div").forEach((element) => {
			element.addEventListener("click", () => {
				this.handleRegion(element.id);
			});
		});
	};

	this.setState = (newState) => {
		this.state = newState;
		this.render();
	};

	// 처음 랜더링 시 실행
	this.render();
}
