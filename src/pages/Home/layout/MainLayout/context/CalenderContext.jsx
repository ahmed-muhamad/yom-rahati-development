import { useState, createContext } from "react";
import dayjs from "dayjs";

export const CalenderContext = createContext(null);

export const CalenderContextProvider = ({ children }) => {
	const [month, setMonth] = useState(dayjs().month());
	const [year, setYear] = useState(dayjs().year());

	const calenderContextStore = {
		month,
		setMonth,
		year,
		setYear,
	};

	return (
		<CalenderContext.Provider value={calenderContextStore}>{children}</CalenderContext.Provider>
	);
};
