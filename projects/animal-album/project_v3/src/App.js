// 웹페이지의 핵심 기능들이 작성되어 있는 파일
// tab bar 모듈과  content 모듈을 가져와서 관리

import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

//index.html body태그 내 최상단 div 요소를 받아옴
export default function App($app) {
	const path = window.location.pathname;

	this.state = {
		currentTab: path.substring(path.lastIndexOf("/") + 1) || "all",
		photos: [],
	};

	// TabBar 컴포넌트
	const tabBar = new TabBar({
		$app,
		intialState: "",

		// 화살표함수는 선언된 위치의 상위 스코프 -> App의 this
		// 클릭되면 App의 state를 다시 세팅 -> 각 컴포넌트 state 다시 세팅
		onClick: async (name) => {
			history.pushState(null, `${name} 사진`, name);
			this.updateContent(name);
		},
	});

	// Content 컴포넌트
	const content = new Content({ $app, initialState: [] });

	// 호출되면 App의 state를 다시 세팅 -> 각 컴포넌트 state 다시 세팅, 재랜더링
	this.setState = (newState) => {
		this.state = newState;
		tabBar.setState(this.state.currentTab);
		content.setState(this.state.photos);
	};

	this.updateContent = async (tabName) => {
		try {
			const currentTab = tabName === "all" ? "" : tabName;
			const photos = await request(currentTab);

			this.setState({
				...this.state,
				currentTab: tabName,
				photos: photos,
			});
		} catch (err) {
			console.log(err);
		}
	};

	// popstate 이벤트 발생 시 url 뒤에 어떤 문자열이 작성되어있는지 판단필요
	// 뒤로가기 할때도 전체 state를 변경
	window.addEventListener("popstate", async () => {
		const path = window.location.pathname;
		this.updateContent(path.substring(path.lastIndexOf("/") + 1) || "all");
	});

	const init = async () => {
		this.updateContent(this.state.currentTab);
	};

	init();
}
