import { CountryContextProvider } from "./context/";
import { CalenderContextProvider } from "./context/";

import { Sidebar } from "./components/";
import { Calender } from "./components/";

export const MainLayout = () => {
	return (
		<main
			className="h-screen py-6 pr-6 focus:outline-2 \
			focus:outline-green-500 focus:outline-offset-[-0.0625rem]">
			<CountryContextProvider>
				<Sidebar />
				<CalenderContextProvider>
					<Calender />
				</CalenderContextProvider>
			</CountryContextProvider>
		</main>
	);
};
