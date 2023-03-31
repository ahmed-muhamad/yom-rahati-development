import { useState } from "react";

import { Topbar } from "./Topbar/";
import { ListDaysOfTheWeek } from "./ListDaysOfTheWeek/";
import { ListDatesOfTheMonth } from "./ListDatesOfTheMonth/";

export const Calender = () => {
	const [isPending, setIsPending] = useState(false);

	return (
		<section
			className={`inline-block w-[80%] h-full ml-4 ${isPending ? "animate-pulse" : ""}`}
			aria-labelledby="calender">
			<header>
				<h2 id="calender" className="sr-only">
					calender
				</h2>
			</header>
			<Topbar isPending={isPending} />
			<ListDaysOfTheWeek />
			<ListDatesOfTheMonth setIsPending={setIsPending} />
		</section>
	);
};
