import React from "react";
import WeekHeader from "./WeekHeader";
import MonthHeader from "./MonthHeader";
import { CalendarContentHeaderProps } from "../../../types";
import useCalendarCanvas from "../../../hooks/useCalendarCanvas";

const CalendarContentHeader: React.FC<CalendarContentHeaderProps> = ({
  className = "",
}) => {
  const { view } = useCalendarCanvas();

  if (view === "day") return;

  return (
    <div className={`content-header ${className}`}>
      {view === "week" && <WeekHeader />}
      {view === "month" && <MonthHeader />}
    </div>
  );
};
export default CalendarContentHeader;
