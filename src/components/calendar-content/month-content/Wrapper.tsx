import React from "react";
import { MonthTemplateProps, MonthTemplateWrapperProps } from "../../../types";
import MonthTemplate from "./template";
import useShellEvents from "../../../hooks/useShellEvents";
import useCalendarCanvas from "../../../hooks/useCalendarCanvas";

const MonthTemplateWrapper: React.FC<MonthTemplateWrapperProps> = ({
  slotDate,
  template = MonthTemplate,
}) => {
  const Template: React.FC<MonthTemplateProps> = template;
  const events = useShellEvents({ date: slotDate || new Date() });
  const { date } = useCalendarCanvas();

  return (
    <React.Fragment>
      {events?.map((event, index) => {
        return <Template key={index} event={event} />;
      })}
    </React.Fragment>
  );
};
export default MonthTemplateWrapper;
