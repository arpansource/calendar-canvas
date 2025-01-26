import React from "react";
import {
  CalendarDayContentProps,
  DayLayoutProps,
  DayTemplateProps,
} from "../../../types";
import DayLayout from "./layout";
import useCalendarCanvas from "../../../hooks/useCalendarCanvas";
import useShellPositions from "../../../hooks/useShellPositions";
import useShellEvents from "../../../hooks/useShellEvents";
import { getEventOffset } from "../../utils";
import DayTemplate from "./template";

const DayContent: React.FC<CalendarDayContentProps> = ({
  className = "",
  layout = DayLayout,
  template = DayTemplate,
}) => {
  const Layout: React.FC<DayLayoutProps> = layout;
  const Template: React.FC<DayTemplateProps> = template;
  const { date } = useCalendarCanvas();
  const positions = useShellPositions();
  const events = useShellEvents({ date: date || new Date() });
  return (
    <div className={`day-content ${className}`}>
      {positions?.map((position, index) => (
        <div
          key={index}
          className="day-layout-wrapper"
          style={{ gridRow: `${position.rowStart}/${position.rowEnd}` }}
        >
          <Layout />
        </div>
      ))}
      <div className="day-content-events absolute w-full h-full top-0 left-0 right-0 bottom-0">
        {events.map((event, index) => {
          const offset = getEventOffset(event, "day");
          return (
            <Template
              key={index}
              event={event}
              style={{
                top: `${offset.top}%`,
                left: `${offset.left}%`,
                height: `${offset.height}%`,
                border: "1px solid transparent",
                position: "absolute",
                width: "100%",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default DayContent;
