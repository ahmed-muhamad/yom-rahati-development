import { useState, createContext } from "react";

export const CountryContext = createContext(null);

export const CountryContextProvider = ({ children }) => {
	const [selectedCountryAndISOCode, setSelectedCountryAndISOCode] = useState([]);

	const countryContextStore = {
		selectedCountryAndISOCode,
		setSelectedCountryAndISOCode,
	};

	return (
		<CountryContext.Provider value={countryContextStore}>{children}</CountryContext.Provider>
	);
};
