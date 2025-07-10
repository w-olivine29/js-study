export default function Header({
	$app,
	initialState,
	handleSortChange,
	handleSearchChange,
}) {
	//처음 Header 컴포넌트가 생성될 때 바인딩
	this.state = initialState;
	this.handleSortChange = handleSortChange;
	this.handleSearchChange = handleSearchChange;

	//
	this.$target = document.createElement("div");
	this.$target.className = "header";
	$app.appendChild(this.$target);

	this.template = () => {
		const { sortBy, searchWord, currentPage } = this.state; //구조분해 할당

		let temp = `<div class="title"><a href="/">✈️ Trip Wiki</a></div>`;

		if (!currentPage.includes("/city")) {
			temp += `<div class="filter-search-container">
            <div class="filter">
                <select id="sortList" class="sort-list">
                    <option value="total" ${
											sortBy === "total" ? "selected" : ""
										}>Total</option>
                    <option value="cost" ${
											sortBy === "cost" ? "selected" : ""
										}>Cost</option>
                    <option value="fun" ${
											sortBy === "fun" ? "selected" : ""
										}>Fun</option>
                    <option value="safety" ${
											sortBy === "safety" ? "selected" : ""
										}>Safety</option>
                    <option value="internet" ${
											sortBy === "internet" ? "selected" : ""
										}>Internet</option>
                    <option value="air" ${
											sortBy === "air" ? "selected" : ""
										}>Air Quality</option>
                    <option value="food" ${
											sortBy === "food" ? "selected" : ""
										}>Food</option>
                </select>
            </div>
            <div class="search">
            <input type="text" placeholder="Search" id="search" autocomplete="off" value=${searchWord} >
            </div>
        </div>`;
		}

		return temp;
	};
	this.render = () => {
		this.$target.innerHTML = this.template(); // DOM 에 추가

		if (!this.state.currentPage.includes("/city/")) {
			document
				.getElementById("sortList")
				.addEventListener("change", (event) => {
					this.handleSortChange(event.target.value);
				});

			const $searchInput = document.getElementById("search");
			$searchInput.addEventListener("keydown", (event) => {
				if (event.key === "Enter") {
					//this.handleSearchChange(event.target.value);
					this.handleSearchChange($searchInput.value);
				}
			});
		}
	};

	this.setState = (newState) => {
		this.state = newState;
		this.render();
	};

	this.render();
}
