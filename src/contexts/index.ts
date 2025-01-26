import React from "react";
import { CalendarCanvasContext as CalendarCanvasContextType } from "../types";
export const CalendarCanvasContext = React.createContext<
  CalendarCanvasContextType<any>
>({});
