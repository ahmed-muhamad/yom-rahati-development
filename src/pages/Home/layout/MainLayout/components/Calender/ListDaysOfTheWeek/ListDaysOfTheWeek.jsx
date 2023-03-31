export const ListDaysOfTheWeek = () => {
	const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
	return (
		<ol className="flex justify-around py-2 border-2" aria-hidden>
			{days.map((day) => (
				<li key={day} className="text-[#6E6B7B] text-sm font-semibold capitalize">
					{day}
				</li>
			))}
		</ol>
	);
};
