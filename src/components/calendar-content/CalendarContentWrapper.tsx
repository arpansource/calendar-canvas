import React from "react";
import { CalendarContentWrapperProps } from "../../types";

const CalendarContentWrapper: React.FC<CalendarContentWrapperProps> = ({
  children,
  className = "",
}) => {
  return <div className={`content-wrapper ${className}`}>{children}</div>;
};
export default CalendarContentWrapper;
