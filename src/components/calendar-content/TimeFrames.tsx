import dayjs from "dayjs";
import useCalendarCanvas from "../../hooks/useCalendarCanvas";
import { TimeFramesProps } from "../../types";
import React from "react";

const TimeFrames: React.FC<TimeFramesProps> = ({ className = "", style }) => {
  const { getTimeFrames } = useCalendarCanvas();
  const times = getTimeFrames();

  return (
    <div style={style} className={`time-frames ${className}`}>
      {times.map((tf, index) => {
        return (
          <div key={index} className="relative">
            <span className="time-label">
              {dayjs.utc(tf).format("hh:mm a")}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TimeFrames;
