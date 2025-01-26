import dayjs from "dayjs";
import useCalendarCanvas from "../../hooks/useCalendarCanvas";
import NavigationWrapper from "./NavigationWrapper";

const NavigateDay = () => {
  const { date } = useCalendarCanvas();
  return (
    <NavigationWrapper>
      <span>{dayjs(date).format("MMM DD, YYYY")}</span>
    </NavigationWrapper>
  );
};

export default NavigateDay;
