import dayjs from "dayjs";
import useCalendarCanvas from "../../../hooks/useCalendarCanvas";
import { WeekContentHeaderProps } from "../../../types";
import TimeGutter from "./TimeGutter";

const WeekHeader: React.FC<WeekContentHeaderProps> = ({ className = "" }) => {
  const { getWeekDates, timegutter } = useCalendarCanvas();
  const dates = getWeekDates();
  return (
    <div className={`week-content-header ${className}`}>
      <TimeGutter
        style={{ minWidth: `${timegutter}px` }}
        className="time-gutter"
      />
      <div className="header-item-wrapper">
        {dates.map((d, index) => (
          <div className="week-label" key={index}>
            {dayjs(d).format("ddd DD")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekHeader;
