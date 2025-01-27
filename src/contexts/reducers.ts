import { CalendarCanvasAction, CalendarCanvasContext } from "../types";

export const calendarCanvasReducer = (
  data: CalendarCanvasContext,
  action: CalendarCanvasAction,
): CalendarCanvasContext => {
  switch (action.type) {
    case "date:set": {
      return {
        ...data,
        date: new Date(action.value),
      };
    }
    case "view:set": {
      return {
        ...data,
        view: action.value,
      };
    }
    case "events:init": {
      return {
        ...data,
        events: action.value,
      };
    }
    case "timegutter:set": {
      return {
        ...data,
        timegutter: action.value,
      };
    }
  }
};
