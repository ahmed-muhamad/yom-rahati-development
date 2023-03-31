export const handleCountryInputValue = (e, setInputText) => {
	const countryName = e.target.value;
	if (e.target.value.length > 70) return;
	setInputText(countryName && countryName[0].toUpperCase() + countryName.slice(1));
};
