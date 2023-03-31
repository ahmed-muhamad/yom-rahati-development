import { useEffect, useState } from "react";

import { ListOfCountries } from "./ListOfCountries.jsx";
import { LoadSpinner } from "./LoadSpinner.jsx";

export const Countries = ({ inputText, setInputText }) => {
	const [showCountries, setShowCountries] = useState(false);
	const [isPending, setIsPending] = useState(false);
	const [countryExists, setCountryExists] = useState(true);

	useEffect(() => {
		setShowCountries(false);
		setCountryExists(true);
		inputText ? setIsPending(true) : setIsPending(false);

		const timer = setTimeout(() => {
			setIsPending(false);
			inputText ? setShowCountries(true) : setShowCountries(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, [inputText]);

	return (
		<div className="relative w-56 h-96 rounded-lg mt-7 ml-5">
			{showCountries && (
				<ListOfCountries
					inputText={inputText}
					setInputText={setInputText}
					setShowCountries={setShowCountries}
					setCountryExists={setCountryExists}
				/>
			)}
			{!countryExists && (
				<p className="text-red-500">
					Sorry, it seems we don't have information about your region
				</p>
			)}
			{isPending && <LoadSpinner />}
		</div>
	);
};
