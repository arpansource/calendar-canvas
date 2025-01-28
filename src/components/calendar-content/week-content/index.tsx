import React from "react";
import {
  CalendarWeekContentProps,
  WeekLayoutProps,
  WeekTemplateProps,
} from "../../../types";
import useCalendarCanvas from "../../../hooks/useCalendarCanvas";
import useShellPositions from "../../../hooks/useShellPositions";
import useShellEvents from "../../../hooks/useShellEvents";
import WeekLayout from "./layout";
import { getEventOffset } from "../../utils";
import WeekTemplate from "./template";

const WeekContent: React.FC<CalendarWeekContentProps> = ({
  className = "",
  layout = WeekLayout,
  template = WeekTemplate,
}) => {
  const Layout: React.FC<WeekLayoutProps> = layout;
  const Template: React.FC<WeekTemplateProps> = template;
  const { date } = useCalendarCanvas();
  const positions = useShellPositions();
  const events = useShellEvents({ date: date || new Date() });
  return (
    <div
      className={`week-content ${className}`}
      style={{ gridTemplateRows: "repeat(1440, 1fr)" }}
    >
      {positions?.map((position, index) => (
        <div
          key={index}
          style={{ gridRow: `${position.rowStart}/${position.rowEnd}` }}
        >
          <Layout slotDate={position.date} />
        </div>
      ))}

      <div className="week-content-events">
        {events.map((event, index) => {
          const offset = getEventOffset(event, "week");
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
                width: `${offset.width}%`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default WeekContent;
