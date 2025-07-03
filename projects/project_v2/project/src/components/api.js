const API_URL = "https://animal-api-two.vercel.app/";

//API
export const request = async () => {
	let response = await fetch(API_URL);

	try {
		if (response) {
			let data = await response.json();
			return data.photos;
		}
	} catch (err) {
		console.log(err);
	}
};
