const API_URL = "https://trip-wiki-api.vercel.app/";
// {선택 지역}?start={}&sort={total, }&search={선택단어}

export const request = async (startIdx, region, sortBy, searchWord) => {
	try {
		//요청에 맞는 url 세팅
		let url = `${API_URL}`;

		// 지역 조건
		if (region && region !== "All") {
			url += `${region}?start=${startIdx}`;
		} else {
			url += `?start=${startIdx}`;
		}
		// 정렬필터
		if (sortBy) {
			url += `&sort=${sortBy}`;
		}
		// 검색
		if (searchWord) {
			url += `&search=${searchWord}`;
		}

		// 요청 & json 파싱
		const response = await fetch(url);
		if (response) {
			let data = await response.json();
			return data;
		}
	} catch (err) {
		console.log(err);
	}
};
