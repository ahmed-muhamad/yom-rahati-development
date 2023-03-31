import { useContext } from "react";

import { CountryContext } from "../../../context/CountryContext.jsx";

export const useCountryContext = () => useContext(CountryContext);
