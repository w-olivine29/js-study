const API_URL = "https://pokemon-api-ecru-eta.vercel.app/";

// {type}?search={searchWord}
// detail/{id}

export const requestList = async (type, searchWord) => {
	let url = API_URL; //

	if (type && type !== "All") {
		url += `${type}`;
	}

	if (searchWord) {
		url += `?search=${searchWord}`;
	}
	console.log(url);

	try {
		const response = await fetch(url);
		const jsonData = await response.json();
		return jsonData.data;
	} catch (err) {
		console.log(err);
	}
};

export const requestDetail = async (monsterId) => {
	try {
		const response = await fetch(`${API_URL}detail/${monsterId}`);
		const jsonData = await response.json();
		return jsonData.data;
	} catch (err) {
		console.log(err);
	}
};
