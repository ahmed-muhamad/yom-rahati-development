import { useEffect } from "react";

import countries from "./data/non-shared/ListOfCountries/countries.json";

import { Country } from "./Country.jsx";

export const ListOfCountries = ({
	inputText,
	setInputText,
	setShowCountries,
	setCountryExists,
	setSelectedCountryAndISOCode,
}) => {
	const listCountries = Object.keys(countries[0])
		.map((countryName) => (
			<Country
				key={countryName}
				setInputText={setInputText}
				countryName={countryName}
				countryCode={countries[0][countryName]}
				setShowCountries={setShowCountries}
				setSelectedCountryAndISOCode={setSelectedCountryAndISOCode}
			/>
		))
		.filter((country) =>
			country.props.countryName.toLowerCase().includes(inputText.toLowerCase()),
		);

	useEffect(() => {
		if (listCountries.length === 0) {
			setCountryExists(false);
			setShowCountries(false);
		}
	});

	return (
		<ul className="h-full shadow-[0_0_0.375rem_rgba(0,0,0,0.25)] overflow-auto">
			{listCountries}
		</ul>
	);
};
