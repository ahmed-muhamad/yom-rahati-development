export const fetchHolidays = async (url) => {
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const holidays = await response.json();
	return holidays;
};
