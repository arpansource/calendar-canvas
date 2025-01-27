import "./main.css";
import {
  CalendarCanvasEvent,
  CalendarCanvasProps,
  CalendarCanvasView,
} from "../types";
import React from "react";
import { calendarCanvasReducer } from "../contexts/reducers";
import { CalendarCanvasContext } from "../contexts";
const CalendarCanvas = <
  TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent,
>({
  children,
  className = "",
  defaultDate,
  timegutter = 150,
  defaultView = CalendarCanvasView.MONTH,
  events = [],
}: CalendarCanvasProps<TCalendarCanvasEvent>) => {
  const [data, dispatch] = React.useReducer(calendarCanvasReducer, {
    view: defaultView,
    timegutter,
    events,
  });

  React.useEffect(() => {
    dispatch({
      type: "date:set",
      value: defaultDate || new Date(),
    });
  }, [defaultDate]);
  return (
    <CalendarCanvasContext.Provider value={{ ...data, dispatch }}>
      <div className={`calendar-canvas ${className}`}>{children}</div>
    </CalendarCanvasContext.Provider>
  );
};

export default CalendarCanvas;
