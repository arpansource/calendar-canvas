import dayjs from "dayjs";
import { WeekHeaderLabelProps } from "../../../types";

const WeekLabel: React.FC<WeekHeaderLabelProps> = ({
  date,
  className = "",
}) => {
  return (
    <div className={`week-label ${className}`}>
      {dayjs(date).format("ddd DD")}
    </div>
  );
};
export default WeekLabel;
