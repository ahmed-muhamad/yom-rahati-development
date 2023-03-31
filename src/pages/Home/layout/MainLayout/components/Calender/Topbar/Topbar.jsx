import { useCalenderContext } from "../../reused-code-between-components/hooks/";

import { PrevMonthBtn } from "./PrevMonthBtn.jsx";
import { Month } from "./Month.jsx";
import { NextMonthBtn } from "./NextMonthBtn.jsx";
import { CountryName } from "./CountryName.jsx";

export const Topbar = ({ isPending }) => {
	const { month, setMonth, year, setYear } = useCalenderContext();
	return (
		<div className="flex items-center mb-2">
			<PrevMonthBtn
				month={month}
				setMonth={setMonth}
				year={year}
				setYear={setYear}
				isPending={isPending}
			/>
			<Month month={month} year={year} />
			<NextMonthBtn
				month={month}
				setMonth={setMonth}
				year={year}
				setYear={setYear}
				isPending={isPending}
			/>
			<CountryName />
		</div>
	);
};
