import dayjs from "dayjs";
import useCalendarCanvas from "../../../hooks/useCalendarCanvas";
import { WeekContentHeaderProps } from "../../../types";

const WeekHeader: React.FC<WeekContentHeaderProps> = ({ className = "" }) => {
  const { getWeekDates } = useCalendarCanvas();
  const dates = getWeekDates();

  return (
    <div className="week-content-header grid grid-cols-8 w-full">
      <div className="col-span-1"></div>
      {dates.map((d, index) => (
        <div
          className="week-label col-span-1 border grid place-content-center"
          key={index}
        >
          {dayjs(d).format("ddd DD")}
        </div>
      ))}
    </div>
  );
};

export default WeekHeader;
