import dayjs from "dayjs";
import useCalendarCanvas from "../../hooks/useCalendarCanvas";
import NavigationWrapper from "./NavigationWrapper";

const NavigateWeek = () => {
  const { getWeekDates } = useCalendarCanvas();
  const dates = getWeekDates();
  return (
    <NavigationWrapper>
      <span>
        {dayjs(dates[0]).format("MMM DD")} -{" "}
        {dayjs(dates[dates.length - 1]).format("MMM DD")}
      </span>
    </NavigationWrapper>
  );
};
export default NavigateWeek;
