import { useCountryContext } from "../../reused-code-between-components/hooks";

export const CountryName = () => {
	const { selectedCountryAndISOCode } = useCountryContext();
	return (
		<p className="ml-72 text-2xl text-primary font-bold">
			{selectedCountryAndISOCode?.length ? selectedCountryAndISOCode[0] : ""}
		</p>
	);
};
