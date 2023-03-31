import dayjs from "dayjs";

import { CurrentDateAndHolidayOfTheDay } from "../ListDatesOfTheMonth/CurrentDateAndHolidayOfTheDay.jsx";

export const getDatesOfThetMonth = (month, year, listHolidays) => {
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
	let currentDayOfTheWeek = 0 - firstDayOfTheMonth;
	// The purpose of dateObj is to get the month so we can compare it with with month parameter
	const dateObj = dayjs(new Date(year, month, 1));
	if (listHolidays?.length) {
		listHolidays = listHolidays.filter((holiday) => {
			const holidayMonth = holiday.date.split("-");
			return holidayMonth[1] === (dateObj["$M"] + 1).toString().padStart(2, "0");
		});
	}
	const dates = [];

	for (let index = 0; index < 35; ++index) {
		++currentDayOfTheWeek;
		const currentDate = dayjs(new Date(year, month, currentDayOfTheWeek));
		dates.push(
			<CurrentDateAndHolidayOfTheDay
				key={currentDate["$d"]}
				currentDate={currentDate["$D"]}
				currentMonth={month}
				currentMonthOfTheDate={currentDate["$M"]}
				currentYearOfTheMonth={year}
				listHolidays={listHolidays}
			/>,
		);
	}
	return dates;
};
