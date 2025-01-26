import React from "react";
import { CalendarCanvasEvent, UseShellEvents } from "../types";
import useCalendarCanvas from "./useCalendarCanvas";
import dayjs from "dayjs";

const useShellEvents = <
  TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent,
>({
  date,
}: UseShellEvents): TCalendarCanvasEvent[] => {
  const { events, view } = useCalendarCanvas<TCalendarCanvasEvent>();
  const [selectedEvents, setSelectedEvents] = React.useState<
    TCalendarCanvasEvent[]
  >([]);

  React.useEffect(() => {
    if (Array.isArray(events)) {
      switch (view) {
        case "week": {
          const startOfWeek = dayjs(date).startOf("week");
          let newSelectedEvents: TCalendarCanvasEvent[] = [];
          for (let i = 0; i < 7; i++) {
            const dateToFilterFor = startOfWeek.add(i, "day");
            newSelectedEvents = [
              ...newSelectedEvents,
              ...events.filter(
                (event) =>
                  dayjs(event.startDate).format("YYYY-MM-DD") ===
                    dateToFilterFor.format("YYYY-MM-DD") &&
                  dayjs(event.endDate).format("YYYY-MM-DD") ===
                    dateToFilterFor.format("YYYY-MM-DD"),
              ),
            ];
          }
          setSelectedEvents(newSelectedEvents);
          return;
        }
        default: {
          setSelectedEvents(
            events.filter(
              (event) =>
                dayjs(event.startDate).format("YYYY-MM-DD") ===
                  dayjs(date).format("YYYY-MM-DD") &&
                dayjs(event.endDate).format("YYYY-MM-DD") ===
                  dayjs(date).format("YYYY-MM-DD"),
            ),
          );
        }
      }
    }
  }, [date, events, view]);

  return selectedEvents;
};
export default useShellEvents;
