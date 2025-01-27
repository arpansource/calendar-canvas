import React from "react";
import TimeFrames from "./TimeFrames";
import { CalendarContentProps } from "../../types";
import useCalendarCanvas from "../../hooks/useCalendarCanvas";
import DayContent from "./day-content";
import WeekContent from "./week-content";
import MonthContent from "./month-content";

const CalendarContent: React.FC<CalendarContentProps> = ({
  className = "",
  templates,
}) => {
  const { view } = useCalendarCanvas();
  // height should be maintained from here. ( it will be applied in both timeframes and content pane.)
  // also the same height factor should be applied in MonthContent see the component.
  const heightOfContentPane =
    view === "month" ? "calc(9.5rem*5)" : "calc(7rem*24)";
  const WeekTemplate = templates?.content?.week;
  const MonthTemplate = templates?.content?.month;

  return (
    <div className={`calendar-content-pane ${className}`}>
      <div style={{ height: heightOfContentPane }}>
        {view !== "month" && (
          <TimeFrames style={{ height: heightOfContentPane }} />
        )}
        {view === "day" && (
          <DayContent
            template={templates?.content?.day}
            layout={templates?.layout?.day}
          />
        )}
        {view === "week" && (
          <WeekContent
            template={templates?.content?.week}
            layout={templates?.layout?.week}
          />
        )}
        {view === "month" && (
          <MonthContent
            template={templates?.content?.week}
            layout={templates?.layout?.week}
          />
        )}
      </div>
    </div>
  );
};
export default CalendarContent;
