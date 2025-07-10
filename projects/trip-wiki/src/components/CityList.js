export default function CityList({
	$app,
	initialState,
	handleLoadMore,
	handleItemClick,
}) {
	this.state = initialState;

	this.$target = document.createElement("div");
	this.$target.className = "city-list";
	this.handleLoadMore = handleLoadMore;
	this.handleItemClick = handleItemClick;

	$app.appendChild(this.$target);
	this.template = () => {
		let temp = `<div class="city-items-container">`;
		if (this.state) {
			this.state.cities.forEach((elm) => {
				temp += `<div class="city-item" id=${elm.id}>
							<img src=${elm.image}></img>
							<div class="city-item-info">${elm.city}, ${elm.country}</div>
							<div class="city-item-score">⭐️${elm.total}</div>
                    	</div>`;
			});
			temp += `</div>`;
		}
		return temp;
	};

	this.render = () => {
		this.$target.innerHTML = this.template();
		this.$target.querySelectorAll("div.city-item").forEach((element) => {
			element.addEventListener("click", () => {
				this.handleItemClick(element.id);
			});
		});

		// 마지막 데이터가 아니라면 더보기 버튼 추가
		if (!this.state.isEnd) {
			const $loadMoreButton = document.createElement("button");
			$loadMoreButton.className = "add-items-btn";
			$loadMoreButton.textContent = "+ 더보기";

			this.$target.appendChild($loadMoreButton);
			$loadMoreButton.addEventListener("click", () => {
				this.handleLoadMore();
			});
		}
	};

	this.setState = (newState) => {
		this.state = newState;
		this.render();
	};

	this.render();
}
