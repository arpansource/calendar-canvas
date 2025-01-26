import React from "react";
import useCalendarCanvas from "../../../hooks/useCalendarCanvas";
import { CalendarMonthContentProps, MonthLayoutProps } from "../../../types";
import MonthLayout from "./layout";
import MonthTemplateWrapper from "./Wrapper";
import dayjs from "dayjs";

const MonthContent: React.FC<CalendarMonthContentProps> = ({
  className = "",
  layout = MonthLayout,
  template,
}) => {
  const Layout: React.FC<MonthLayoutProps> = layout;
  const { getMonthDates, date } = useCalendarCanvas();
  const dates = getMonthDates();
  return (
    <div className={`month-content-events ${className}`}>
      {dates.map((d, index) => (
        <Layout
          style={{ height: "9.5rem", overflow: "auto" }}
          slotDate={d}
          dateInMonth={dayjs(d).isSame(dayjs(date || new Date()), "month")}
          key={index}
        >
          <MonthTemplateWrapper slotDate={d} template={template} />
        </Layout>
      ))}
    </div>
  );
};
export default MonthContent;
