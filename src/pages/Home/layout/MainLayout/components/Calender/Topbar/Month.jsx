export const Month = ({ month, year }) => {
	// Any year in new Date() will do, the point of this is to get the month's name.
	const date = new Date(2023, month, 1);
	const monthName = date.toLocaleString("default", { month: "long" });
	return (
		<p className="basis-40 text-[#5E5873] text-lg text-center font-medium">{`${monthName} ${year}`}</p>
	);
};
