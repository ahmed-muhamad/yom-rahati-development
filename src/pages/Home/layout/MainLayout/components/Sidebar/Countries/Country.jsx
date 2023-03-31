import { useCountryContext } from "../../reused-code-between-components/hooks/";

export const Country = ({ setInputText, countryName, countryCode, setShowCountries }) => {
	const { setSelectedCountryAndISOCode } = useCountryContext();
	return (
		<li
			style={{ backgroundImage: `url(/svg/flags/${countryCode}.svg)` }}
			className="bg-no-repeat bg-[center_left_0.875rem] bg-[length:1.75rem_1.3125rem] pl-14 \
			pr-3 py-3 text-xs border-b-[0.0625rem] focus:outline-offset-[-0.0625rem] cursor-pointer"
			tabIndex={0}
			onKeyUp={(e) => {
				if (e.key !== "Enter") return;
				setSelectedCountryAndISOCode([countryName, countryCode]);
				setShowCountries(false);
				setInputText("");
				e.preventDefault();
			}}
			onClick={() => {
				setSelectedCountryAndISOCode([countryName, countryCode]);
				setShowCountries(false);
				setInputText("");
			}}>
			{countryName}
		</li>
	);
};
