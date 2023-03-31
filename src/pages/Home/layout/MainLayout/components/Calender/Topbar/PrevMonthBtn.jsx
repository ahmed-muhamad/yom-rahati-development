export const PrevMonthBtn = ({ month, setMonth, year, setYear, isPending }) => {
	const changeToPrevMonth = () => {
		if (month % 12 === 0) setYear(--year);
		setMonth(--month);
	};

	return (
		<button
			className="bg-[url('/svg/left-arrow.svg')] bg-center bg-no-repeat w-4 h-6 outline-offset-4 cursor-pointer disabled:cursor-not-allowed"
			disabled={isPending}
			onClick={changeToPrevMonth}></button>
	);
};
