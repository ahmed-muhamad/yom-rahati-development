import { useContext } from "react";

import { CalenderContext } from "../../../context/CalenderContext.jsx";

export const useCalenderContext = () => useContext(CalenderContext);
