import React from "react";
import { CalendarCanvasContext } from "../contexts";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import {
  CalendarCanvasContext as CalendarCanvasContextType,
  CalendarCanvasEvent,
  CalendarCanvasViewUnion,
  UseCalendarReturnType,
} from "../types";
dayjs.extend(utc);

const useCalendarCanvas = <
  TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent,
>(): UseCalendarReturnType<TCalendarCanvasEvent> => {
  const context = React.useContext<
    CalendarCanvasContextType<TCalendarCanvasEvent>
  >(CalendarCanvasContext);

  if (Object.keys(context).length === 0) {
    throw new Error(
      "No Context Provided. Make sure the component using `useCalendarCanvas` is wrapped with `CalendarCanvas` component",
    );
  }
  const { dispatch, ...contextValue } = context;
  const nextDate = () => {
    dispatch?.({
      type: "date:set",
      value: dayjs(contextValue.date).add(1, contextValue.view).toDate(),
    });
  };

  const setDate = (date: Date) => {
    dispatch?.({
      type: "date:set",
      value: date,
    });
  };

  const prevDate = () => {
    dispatch?.({
      type: "date:set",
      value: dayjs(contextValue.date).subtract(1, contextValue.view).toDate(),
    });
  };

  const viewToday = () => {
    dispatch?.({
      type: "date:set",
      value: dayjs().toDate(),
    });
  };

  const setView = (view: CalendarCanvasViewUnion) => {
    dispatch?.({
      type: "view:set",
      value: view,
    });
  };

  const getWeekDates = () => {
    const startOfWeek = dayjs(contextValue.date).startOf("week");
    const weekDates: Date[] = [];
    for (let i = 0; i < 7; i++) {
      weekDates.push(startOfWeek.add(i, "day").toDate());
    }
    return weekDates;
  };

  const getMonthDates = (): Date[] => {
    const dates: Date[] = [];
    const startOfMonth = dayjs(contextValue.date)
      .startOf("month")
      .startOf("week");
    for (let i = 0; i < 35; i++) {
      dates.push(startOfMonth.add(i, "day").toDate());
    }
    return dates;
  };

  const getTimeFrames = () => {
    const times = [];
    const startDate = dayjs().utc().startOf("day");
    for (let i = 0; i < 24; i++) {
      times.push(startDate.add(i, "hour").toDate());
    }
    return times;
  };

  const setTimeGutterWidth = (width: number) => {
    dispatch?.({
      type: "timegutter:set",
      value: width,
    });
  };

  return {
    ...contextValue,
    setDate,
    nextDate,
    prevDate,
    viewToday,
    setView,
    getWeekDates,
    getMonthDates,
    getTimeFrames,
    setTimeGutterWidth,
  };
};
export default useCalendarCanvas;
