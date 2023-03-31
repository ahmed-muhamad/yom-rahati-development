export const CurrentDateAndHolidayOfTheDay = ({
	currentDate,
	currentMonth,
	currentMonthOfTheDate,
	currentYearOfTheMonth,
	listHolidays,
}) => {
	if (currentMonth > 11) currentMonth %= 12;
	else if (currentMonth < 0) {
		currentMonthOfTheDate =
			currentMonthOfTheDate === 0 ? currentMonthOfTheDate : 12 - currentMonthOfTheDate;
		currentMonth = (currentMonth * -1) % 12;
	}
	const textColor = currentMonth !== currentMonthOfTheDate ? "text-[#B9B9C3]" : "text-[#6E6B7B]";

	let dateSuffix = null;
	const currentDateString = currentDate.toString();
	const firstDigit = currentDateString.length - 1;
	const secondDigit = currentDateString.length - 1;

	if (currentDateString.length < 2) {
		if (currentDateString[firstDigit] === "1") dateSuffix = "st";
		else if (currentDateString[firstDigit] === "2") dateSuffix = "nd";
		else if (currentDateString[firstDigit] === "3") dateSuffix = "rd";
		else dateSuffix = "th";
	} else {
		if (currentDateString[firstDigit] === "1" && currentDateString[secondDigit] !== "1")
			dateSuffix = "st";
		else if (currentDateString[firstDigit] === "2" && currentDateString[secondDigit] !== "1")
			dateSuffix = "nd";
		else if (currentDateString[firstDigit] === "3" && currentDateString[secondDigit] !== "1")
			dateSuffix = "rd";
		else dateSuffix = "th";
	}

	// The point of this is to get the month's and the day's name.
	const date = new Date(currentYearOfTheMonth, currentMonth, currentDate);
	const monthName = date.toLocaleString("default", { month: "long" });
	let holidayName = null;

	listHolidays.forEach((holiday) => {
		if (holiday.date.slice(-2) === currentDate.toString()) holidayName = holiday.name;
	});

	return (
		<li
			className={`pt-1 pl-1 border-r-2 border-b-2 ${textColor} text-sm text-left`}
			aria-label={
				holidayName
					? `${currentDate + dateSuffix} of ${monthName} ${currentYearOfTheMonth}`
					: ""
			}
			aria-hidden={holidayName ? false : true}
			tabIndex={holidayName ? 0 : -1}>
			<p>{currentDate}</p>
			{holidayName && (
				<p className="bg-[#28C76F]/[0.12] p-1 rounded-sm ml-1 mr-2 mt-2 text-[#28C76F] font-semibold">
					{holidayName}
				</p>
			)}
		</li>
	);
};
