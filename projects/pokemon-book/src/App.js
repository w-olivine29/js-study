// 경로에서 파일확장자까지 적지 않으면 text/html 로 응답됨 (엄격한 MIME 유형 검사)
import { requestList, requestDetail } from "./components/api.js";
import PokemonList from "./components/PokemonList.js";
import Header from "./components/Header.js";
import PokemonDetail from "./components/PokemonDetail.js";

export default function App($app) {
	this.state = {
		monsterType: "",
		searchWord: "",
		monsters: [],
		currentPageType: "list", //list or detail
	};

	const renderHeader = () => {
		new Header({
			$app,
			initialState: {
				currentPageType: this.state.currentPageType,
				searchWord: this.state.searchWord,
			},
			moveMainPage: async () => {
				history.pushState(null, null, "/");

				const monsters = await requestList();

				this.setState({
					...this.state,
					monsterType: "",
					searchWord: "",
					currentPageType: "list",
					monsters: monsters,
				});
			},

			searchMonster: async (searchWord) => {
				let pageUrl = "/";

				// 현재 타입 필터링 중이라면, 같이 포함해서 요청
				if (this.state.monsterType && this.state.monsterType !== "all") {
					pageUrl += `${this.state.monsterType}`;
				}
				pageUrl += `?search=${searchWord}`;

				history.pushState(null, null, pageUrl);

				const monsters = await requestList(this.state.monsterType, searchWord);

				this.setState({
					...this.state,
					searchWord: searchWord,
					currentPageType: "list",
					monsters: monsters,
				});
			},
		});
	};

	const renderPokemonList = () => {
		new PokemonList({
			$app,
			initialState: this.state.monsters,
			handleMonsterType: async (monsterType) => {
				const pageUrl = `/${monsterType}`;
				history.pushState(null, null, pageUrl);

				const monsters = await requestList(monsterType, this.searchWord);

				// state 업데이트
				this.setState({
					...this.state,
					monsterType: monsterType,
					currentPageType: "list",
					monsters: monsters,
				});
			},
			handleClickItem: (monsterId) => {
				history.pushState(null, null, `/detail/${monsterId}`);
				this.setState({
					...this.state,
					monsterType: "",
					monsters: [],
					currentPageType: "detail",
				});
			},
		});
	};

	const renderPokemonDetail = async (monsterId) => {
		try {
			const monster = await requestDetail(monsterId);
			new PokemonDetail({ $app, initialState: monster });
		} catch (err) {
			console.log(err);
		}
	};

	this.updateContent = async () => {
		// /{타입}?search={검색단어}
		// /detail/{id}

		let currentPageType = "";
		let type = "";
		let searchWord = "";
		let monsters = "";
		if (location.pathname.includes("detail")) {
			currentPageType = "detail";
		} else {
			currentPageType = "list";
			type = window.location.pathname.replace("/", ""); // /타입 -> 타입
			searchWord = window.location.search.split("?search=")[1]; // ?search={검색단어} -> ["",검색단어]

			monsters = await requestList(type, searchWord);
		}

		this.setState({
			...this.state,
			monsterType: type,
			searchWord: searchWord,
			monsters: monsters,
			currentPageType: currentPageType,
		});
	};

	// state 변경할 때마다 재랜더링 -> 페이지 종류에 따라 조건부 랜더링
	const render = () => {
		$app.innerHTML = "";

		if (this.state.currentPageType === "detail") {
			console.log("상세 페이지 랜더링 진입");

			renderHeader();

			let path = window.location.pathname;
			renderPokemonDetail(path.split("/detail/")[1]);
		} else {
			console.log("리스트 페이지 랜더링 진입");

			renderHeader();
			renderPokemonList();
		}
	};

	// 전체 state, 컴포넌트들의 state 변경
	this.setState = (newState) => {
		this.state = newState;

		// 기존방식: App.js 에서 전체 state 변경 후 -> 각 컴포넌트 state 변경 (처음 초기화때 만든 컴포넌트의 state를 변경하는 방식)
		// 바뀐방식: App.js 에서 전체 state 변경 후 -> 재랜더링 (새로운 컴포넌트 인스턴스로 교체)
		render();
	};

	// 새로고침 시 현재 url에 맞게 요청
	const init = async () => {
		this.updateContent();
	};

	// 뒤로가기 & 앞으로가기
	window.addEventListener("popstate", async () => {
		this.updateContent();
	});

	// 처음 접속 시 실행
	init();
}
