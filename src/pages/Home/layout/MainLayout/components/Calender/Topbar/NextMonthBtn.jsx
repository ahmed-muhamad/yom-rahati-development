export const NextMonthBtn = ({ month, setMonth, year, setYear, isPending }) => {
	const changeToNextMonth = () => {
		setMonth(++month);
		if (month % 12 === 0) setYear(++year);
	};

	return (
		<button
			className="bg-[url('/svg/right-arrow.svg')] bg-center bg-no-repeat w-4 h-6 outline-offset-4 cursor-pointer disabled:cursor-not-allowed"
			disabled={isPending}
			onClick={changeToNextMonth}></button>
	);
};
