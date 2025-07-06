const API_URL = "https://animal-api-two.vercel.app/";

//API
export const request = async (name) => {
	let response = await fetch(name ? `${API_URL}${name}` : API_URL);

	try {
		if (response) {
			let data = await response.json();
			return data.photos;
		}
	} catch (err) {
		console.log(err);
	}
};
