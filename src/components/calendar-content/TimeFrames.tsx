import dayjs from "dayjs";
import useCalendarCanvas from "../../hooks/useCalendarCanvas";
import { TimeFramesProps } from "../../types";
import React from "react";

const TimeFrames: React.FC<TimeFramesProps> = ({ className = "", style }) => {
  const { getTimeFrames } = useCalendarCanvas();
  const times = getTimeFrames();

  return (
    <div
      style={style}
      className={`time-frames col-span-1 grid grid-cols-1 ${className}`}
    >
      {times.map((tf, index) => {
        return (
          <div key={index} className="relative border-t">
            <span className="time-label absolute -top-3 h-4 bg-white pl-10 pr-2 text-sm text-secondary-foreground/80">
              {dayjs.utc(tf).format("hh:mm a")}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TimeFrames;
