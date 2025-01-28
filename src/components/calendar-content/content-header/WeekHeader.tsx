import dayjs from "dayjs";
import useCalendarCanvas from "../../../hooks/useCalendarCanvas";
import { WeekContentHeaderProps } from "../../../types";
import DefaultTimeGutter from "./TimeGutter";
import DefaultWeekLabel from "./WeekLabel";

const WeekHeader: React.FC<WeekContentHeaderProps> = ({
  className = "",
  templates,
}) => {
  const TimeGutter = templates?.timeGutter || DefaultTimeGutter;
  const WeekLabel = templates?.weekLabel || DefaultWeekLabel;
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
          <WeekLabel key={index} date={d} />
        ))}
      </div>
    </div>
  );
};

export default WeekHeader;
