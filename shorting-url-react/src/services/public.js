export const getShortUrl = async url => {
	const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
	const data = response.json();

	return data;
};

