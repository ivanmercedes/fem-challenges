export const createUrlAdapter = url => ({
	short_link: url.result.full_short_link,
	original_link: url.result.original_link,
});
