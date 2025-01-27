import React from "react";
import { MonthLayoutProps } from "../../../types";
import dayjs from "dayjs";

const MonthLayout: React.FC<MonthLayoutProps> = ({
  children,
  slotDate,
  dateInMonth = false,
  style,
  className,
}) => {
  return (
    <div
      className={`month-layout ${className ? className : !dateInMonth ? "inactive-month" : ""}`}
      style={{
        ...style,
        ...(dayjs(slotDate || new Date())
          .format("ddd")
          .toLowerCase() !== "sat" && {
          borderRight: "1px solid black",
        }),
      }}
    >
      <div className="slot-label">
        <span>{slotDate?.getDate()}</span>
      </div>
      {dateInMonth && <div className="event-wrapper">{children}</div>}
    </div>
  );
};
export default MonthLayout;
