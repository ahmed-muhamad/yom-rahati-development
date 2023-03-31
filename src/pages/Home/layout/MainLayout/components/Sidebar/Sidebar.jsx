import { useState } from "react";

import { Search } from "./Search/";
import { Countries } from "./Countries/";
import { Illustration } from "./Illustration/";

export const Sidebar = ({ setSelectedCountryAndISOCode }) => {
	const [inputText, setInputText] = useState("");
	if (inputText.includes("Isr")) setInputText("Palestine");

	return (
		<div className="inline-flex flex-col align-top w-64 h-full" aria-label="sidebar">
			<Search inputText={inputText} setInputText={setInputText} />
			<Countries
				inputText={inputText}
				setInputText={setInputText}
				setSelectedCountryAndISOCode={setSelectedCountryAndISOCode}
			/>
			<Illustration />
		</div>
	);
};
