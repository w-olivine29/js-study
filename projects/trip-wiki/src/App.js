import Header from "./components/Header.js";
import CityList from "./components/CityList.js";
import RegionList from "./components/RegionList.js";
import CityDetail from "./components/CityDetail.js";
import { request, requestCityDeatil } from "./components/api.js";

export default function App($app) {
	const getSortBy = () => {
		//console.log(window.location.search.length);

		if (window.location.search) {
			// search -> 쿼리파람 요소 가져옴
			return window.location.search.split("sort=")[1].split("&")[0];
		}
		return "total"; //디폴트값
	};

	const getSearchWord = () => {
		//window.location.search =>  /{지역}?sort={sortBy}&search={searchWord}
		//split("search=") =>[{지역}?sort={sortBy}&, {searchWord}]

		// console.log(window.location.search.length);
		// console.log(window.location.search.includes("search="));

		if (window.location.search && window.location.search.includes("search=")) {
			return window.location.search.split("search=")[1];
		}
		return ""; //디폴트값
	};

	this.state = {
		startIdx: 0,
		sortBy: getSortBy(),
		searchWord: getSearchWord(),
		region: "",
		cities: "",
		currentPage: window.location.pathname,
	};

	//함수 호출 시마다 새로운 Header 인스턴스를 생성해주도록 코드를 수정
	const renderHeader = () => {
		new Header({
			$app,
			initialState: {
				sortBy: this.state.sortBy,
				searchWord: this.state.searchWord,
				currentPage: this.state.currentPage,
			},
			//
			handleSortChange: async (sortBy) => {
				// 라우팅 작업
				const pageUrl = `/${this.state.region}?sort=${sortBy}`;
				history.pushState(
					null,
					null,
					this.state.searchWord
						? pageUrl + `&search=${this.state.searchWord}`
						: pageUrl
				);

				// 조건에 맞는 새로운 데이터 가져오기
				const cities = await request(
					0, //정렬기준이 바뀌었기때문에 시작인덱스를 0으로 세팅
					this.state.region,
					sortBy, // 새로운 정렬기준
					this.state.searchWord
				);

				// 전체 state 업데이트
				this.setState({
					...this.state,
					startIdx: 0,
					sortBy: sortBy,
					currentPage: pageUrl,
					cities: cities,
				});
			},
			handleSearchChange: async (searchWord) => {
				const pageUrl = `/${this.state.region}?sort=${this.state.sortBy}&search=${searchWord}`;
				history.pushState(null, null, pageUrl);

				const citeis = await request(
					0, //새로 검색했기때문에 시작 인덱스를 0으로 세팅
					this.state.region,
					this.state.sortBy,
					searchWord //새로운 검색단어
				);

				// 전체 state 업데이트
				this.setState({
					...this.state,
					startIdx: 0,
					searchWord: searchWord,
					cities: citeis,
				});
			},
		});
	};

	const renderRegionList = () => {
		new RegionList({
			$app,
			region: this.state.region,
			handleRegion: async (region) => {
				history.pushState(null, null, `/${region}?sort=total`);

				// 지역 선택시, 시작점, 정렬기준, 검색단어 초기화
				const newCities = await request(0, region, "total");

				this.setState({
					...this.state,
					strtIdx: 0,
					sortBy: "total",
					region: region,
					searchWord: "",
					cities: newCities,
				});
			},
		});
	};

	const renderCityList = () => {
		new CityList({
			$app,
			initialState: this.state.cities,
			handleLoadMore: async () => {
				const newStartIdx = this.state.startIdx + 40;
				const newCities = await request(
					newStartIdx,
					this.state.region,
					this.state.sortBy,
					this.state.searchWord
				);

				// state 업데이트
				this.setState({
					...this.state,
					startIdx: newStartIdx,
					cities: {
						cities: [...this.state.cities.cities, ...newCities.cities],
						isEnd: newCities.isEnd,
					},
				});
			},
			handleItemClick: (id) => {
				history.pushState(null, null, `/city/${id}`);
				this.setState({
					...this.state,
					currentPage: `/city/${id}`,
				});
			},
		});
	};

	const renderCityDetail = async (cityId) => {
		try {
			const cityDetailData = await requestCityDeatil(cityId);
			new CityDetail({ $app, initialState: cityDetailData });
		} catch (err) {
			console.log(err);
		}
	};

	// 특정 변수에 인스턴스를 할당하던 방식에서 -> 조건부 랜더링 적용 (각각의 랜더링 함수 호출 시 인스턴스가 생성)
	const render = () => {
		const path = this.state.currentPage;

		// URL 이 달라지면 다른 컴포넌트 랜더링을 위해 기존 값들을 비워줌
		$app.innerHTML = "";
		if (path.startsWith("/city/")) {
			renderHeader();
			renderCityDetail(path.split("/city/")[1]);
		} else {
			renderHeader();
			renderRegionList();
			renderCityList();
		}
	};

	// url 변경 시 전체 state 업데이트, 재랜더링
	this.setState = (newState) => {
		this.state = newState;
		render();
	};

	const init = async () => {
		const path = this.state.currentPage;
		console.log(path);

		if (path.startsWith("/city/")) {
			render();
		} else {
			// 메인페이지라면
			const cities = await request(
				this.state.startIdx,
				this.state.region,
				this.state.sortBy,
				this.state.searchWord
			);
			this.setState({
				...this.state,
				cities: cities,
			});
		}
	};

	// 뒤로가기, 앞으로가기 기능
	//popstate 이벤트 (history.back(), history.forward(), history.go() ...)
	window.addEventListener("popstate", async () => {
		const urlPath = window.location.pathname; // 경로 요소만 가져옴

		const prevRegion = urlPath.replace("/", "");
		const prevSortBy = getSortBy();
		const prevSearchWord = getSearchWord();
		const prevStartIdx = 0;

		const prevCities = await request(
			prevStartIdx,
			prevRegion,
			prevSortBy,
			prevSearchWord
		);

		this.setState({
			...this.state,
			startIdx: prevStartIdx,
			region: prevRegion,
			sortBy: prevSortBy,
			searchWord: prevSearchWord,
			cities: prevCities,
			currentPage: urlPath,
		});
	});

	// 웹 사이트에 처음 접속했을 때 실행
	init();
}
