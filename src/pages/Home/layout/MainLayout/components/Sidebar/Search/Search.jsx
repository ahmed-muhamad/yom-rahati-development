import { handleCountryInputValue } from "./helpers/";

export const Search = ({ inputText, setInputText }) => {
	return (
		<input
			id="search"
			className="bg-[#685DD8]/[0.2] bg-[url('/svg/search.svg')] bg-no-repeat \
  	  		bg-[center_left_0.375rem] w-56 py-[0.375rem] pr-[0.375rem] pl-8 border-2 border-solid \
  	  		border-primary rounded-md ml-5 text-primary text-[0.8125rem] first-letter:capitalize \
  	  		font-medium placeholder:text-primary focus:outline outline-[#7367F0]/[0.7] outline-[0.375rem]"
			name="search"
			type="search"
			placeholder="Search by country or region"
			autoCorrect="randomvalue"
			onChange={(e) => handleCountryInputValue(e, setInputText)}
			value={inputText.includes("Isr") ? "Palestine" : inputText}
		/>
	);
};
