import React from "react";
import { MonthTemplateProps } from "../../../types";

const MonthTemplate: React.FC<MonthTemplateProps> = ({ event, style }) => {
  return (
    <div className="month-template" style={style}>
      {event?.title}
    </div>
  );
};
export default MonthTemplate;
