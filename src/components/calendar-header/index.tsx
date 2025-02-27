import React from "react";
import NavigateDay from "./NavigateDay";
import NavigateMonth from "./NavigateMonth";
import NavigateWeek from "./NavigateWeek";
import useCalendarCanvas from "../../hooks/useCalendarCanvas";
import { CalendarHeaderProps } from "../../types";

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ className = "" }) => {
  const { view, setView, viewToday } = useCalendarCanvas();

  return (
    <div className={`calendar-header ${className}`}>
      <button onClick={() => viewToday()}>Today</button>

      <div className="calendar-header-navigations">
        {view === "day" && <NavigateDay />}
        {view === "week" && <NavigateWeek />}
        {view === "month" && <NavigateMonth />}
      </div>
      <div className="calendar-view-buttons">
        <button
          onClick={() => setView("day")}
          className={`${view === "day" && "active"}`}
        >
          Day
        </button>
        <button
          onClick={() => setView("week")}
          className={`${view === "week" && "active"}`}
        >
          Week
        </button>
        <button
          onClick={() => setView("month")}
          className={`${view === "month" && "active"}`}
        >
          Month
        </button>
      </div>
    </div>
  );
};
export default CalendarHeader;
