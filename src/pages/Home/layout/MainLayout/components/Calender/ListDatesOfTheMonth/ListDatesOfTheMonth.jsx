import { useState, useEffect, useRef } from "react";
import { useCalenderContext } from "../../reused-code-between-components/hooks/";
import { getDatesOfThetMonth } from "../helpers/";
import { fetchHolidays } from "../api/getFetch";
import { useCountryContext } from "../../reused-code-between-components/hooks/";

export const ListDatesOfTheMonth = ({ setIsPending }) => {
	const [listHolidays, setListHolidays] = useState([]);
	const { month, year } = useCalenderContext();
	const { selectedCountryAndISOCode } = useCountryContext();
	let initialMount = useRef(true);

	const param = {
		url: `https://holidays-by-api-ninjas.p.rapidapi.com/v1/holidays?country=${selectedCountryAndISOCode[1]}&year=${year}`,
	};
	const url = "https://node-api-h3ed.onrender.com/api/holidays?" + new URLSearchParams(param);

	useEffect(() => {
		if (selectedCountryAndISOCode.length) {
			(async () => {
				setIsPending(true);
				const holidays = await fetchHolidays(url);
				Array.isArray(holidays) ? setListHolidays(holidays) : setListHolidays([]);
				setIsPending(false);
				initialMount.current = false;
			})();
		}
	}, [selectedCountryAndISOCode, year]);

	const listDatesOfTheMonth = getDatesOfThetMonth(month, year, listHolidays);

	return (
		<ol className="grid grid-cols-7 relative h-[calc(100%_-_5rem)] border-l-2">
			{listDatesOfTheMonth}
			{!initialMount.current && !listHolidays?.length && (
				<p className="absolute inset-0 bg-rose-100 w-max h-max p-4 rounded-md m-auto text-red-600 text-center">
					There is no information available, for the year {year}.<br />
					Apologies for any inconvenience
				</p>
			)}
		</ol>
	);
};
