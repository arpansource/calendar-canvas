import NavigationWrapper from "./NavigationWrapper";
import useCalendarCanvas from "../../hooks/useCalendarCanvas";
import dayjs from "dayjs";

const NavigateMonth = () => {
  const { date } = useCalendarCanvas();
  return (
    <NavigationWrapper>
      <span>{dayjs(date).format("MMM, YYYY")}</span>
    </NavigationWrapper>
  );
};
export default NavigateMonth;
