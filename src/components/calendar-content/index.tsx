import React from "react";
import DefaultTimeFrames from "./TimeFrames";
import { CalendarContentProps } from "../../types";
import useCalendarCanvas from "../../hooks/useCalendarCanvas";
import DayContent from "./day-content";
import WeekContent from "./week-content";
import MonthContent from "./month-content";

const CalendarContent: React.FC<CalendarContentProps> = ({
  className = "",
  componentClasses,
  templates,
}) => {
  const { view, timegutter } = useCalendarCanvas();
  // height should be maintained from here. ( it will be applied in both timeframes and content pane.)
  // also the same height factor should be applied in MonthContent see the component.
  const heightOfContentPane =
    view === "month" ? "calc(9.5rem*5)" : "calc(7rem*24)";
  const TimeFrames = templates?.timeFrames || DefaultTimeFrames;
  const {
    contentWrapper = "",
    timeFrames = "",
    dayContent = "",
    weekContent = "",
    monthContent = "",
  } = componentClasses || {};

  return (
    <div className={`calendar-content-pane ${className}`}>
      <div
        className={`calendar-content-wrapper ${contentWrapper}`}
        style={{ height: heightOfContentPane }}
      >
        {view !== "month" && (
          <TimeFrames
            className={timeFrames}
            style={{ height: heightOfContentPane, minWidth: timegutter }}
          />
        )}
        {view === "day" && (
          <DayContent
            className={`${dayContent}`}
            template={templates?.content?.day}
            layout={templates?.layout?.day}
          />
        )}
        {view === "week" && (
          <WeekContent
            className={`${weekContent}`}
            template={templates?.content?.week}
            layout={templates?.layout?.week}
          />
        )}
        {view === "month" && (
          <MonthContent
            className={`${monthContent}`}
            template={templates?.content?.month}
            layout={templates?.layout?.month}
          />
        )}
      </div>
    </div>
  );
};
export default CalendarContent;
