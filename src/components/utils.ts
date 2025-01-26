import dayjs from "dayjs";
import {
  CalendarCanvasEvent,
  CalendarCanvasEventOffset,
  CalendarCanvasViewUnion,
} from "../types";

export const getEventOffset = (
  newEvent: CalendarCanvasEvent,
  view: CalendarCanvasViewUnion,
): CalendarCanvasEventOffset => {
  const startOfDay = dayjs(newEvent.startDate).startOf("day");

  // from where to start rendering the div...
  const minutesBeforeEvent = dayjs(newEvent.startDate).diff(
    startOfDay,
    "minutes",
  );

  // height in percentage...
  const durationMinutes = dayjs(newEvent.endDate).diff(
    dayjs(newEvent.startDate),
    "minutes",
  );

  let daysBeforeEvent: number = 0;

  if (view === "week") {
    // calculate left offset.
    const startOfWeek = dayjs(newEvent.startDate).startOf("week");
    daysBeforeEvent = dayjs(newEvent.startDate).diff(startOfWeek, "days");
  }

  // added 1 so that we can be able to view border behind the box.
  // to adjust the measurement we need to decrease that minute from height of the box.
  return {
    top: (minutesBeforeEvent / 1440) * 100,
    left: view === "day" ? 0 : (daysBeforeEvent / 7) * 100,
    height: (durationMinutes / 1440) * 100,
    width: view === "day" ? 100 : (1 / 7) * 100,
  };
};
