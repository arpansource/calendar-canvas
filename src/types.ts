export interface IWrapper {
  children: React.ReactNode;
}
export interface IClassName {
  className?: string;
}
export interface ICssProperties {
  style?: React.CSSProperties;
}
export type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export interface BoxPositionMeta {
  date: Date;
  rowStart: number;
  rowEnd: number;
}
export interface CalendarCanvasEvent {
  startDate: Date;
  endDate: Date;
  title: string;
}
export interface CalendarCanvasEventOffset {
  top: number;
  left: number;
  width: number;
  height: number;
}

export enum CalendarCanvasView {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
}

export type CalendarCanvasViewUnion = `${CalendarCanvasView}`;

export interface CalendarCanvasProps<
  TCalendarCanvasEvent extends object = CalendarCanvasEvent,
> extends IWrapper,
    IClassName {
  /** The default date for the calendar canvas */
  defaultDate?: Date;
  /** The events to be displayed on the calendar canvas */
  events?: TCalendarCanvasEvent[];
  /** The default view for the calendar canvas */
  defaultView?: CalendarCanvasViewUnion;
  /** The width of gutter on day and week header */
  timegutter?: number;
}

/*==============================================
layout & templates
===============================================*/
export interface CalendarHeaderProps extends IClassName {}
export interface TimeGutterProps extends ICssProperties, IClassName {}
export interface CalendarContentWrapperProps extends IWrapper, IClassName {}
export interface CalendarContentHeaderProps extends IClassName {}
export interface MonthContentHeaderProps extends IClassName {}
export interface WeekHeaderLabelProps extends IClassName {
  date: Date;
}
export interface WeekContentHeaderProps extends IClassName {
  templates?: {
    timeGutter?: React.FC<TimeGutterProps>;
    weekLabel?: React.FC<WeekHeaderLabelProps>;
  };
}
export interface TimeFramesProps extends IClassName, ICssProperties {}
export interface DayLayoutProps extends ICssProperties, IClassName {}
export interface DayTemplateProps<
  TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent,
> extends ICssProperties {
  event?: TCalendarCanvasEvent;
}
export interface CalendarDayContentProps extends IClassName {
  layout?: React.FC<DayLayoutProps>;
  template?: React.FC<DayTemplateProps>;
}
export interface WeekLayoutProps extends ICssProperties, IClassName {
  slotDate?: Date;
}
export interface WeekTemplateProps<
  TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent,
> extends ICssProperties {
  event?: TCalendarCanvasEvent;
}
export interface CalendarWeekContentProps extends IClassName {
  layout?: React.FC<WeekLayoutProps>;
  template?: React.FC<WeekTemplateProps>;
}
export interface MonthLayoutProps extends ICssProperties, IWrapper, IClassName {
  slotDate?: Date;
  dateInMonth?: boolean;
}
export interface MonthTemplateProps<
  TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent,
> extends ICssProperties {
  event?: TCalendarCanvasEvent;
}
export interface MonthTemplateWrapperProps {
  slotDate?: Date;
  template?: React.FC<MonthTemplateProps>;
}
export interface CalendarMonthContentProps extends IClassName {
  layout?: React.FC<MonthLayoutProps>;
  template?: React.FC<MonthTemplateProps>;
}

export interface CalendarContentProps extends IClassName {
  templates?: {
    content?: {
      week?: React.FC<WeekTemplateProps>;
      day?: React.FC<DayTemplateProps>;
      month?: React.FC<MonthTemplateProps>;
    };
    layout?: {
      day?: React.FC<DayLayoutProps>;
      month?: React.FC<MonthLayoutProps>;
      week?: React.FC<WeekLayoutProps>;
    };
    timeFrames?: React.FC<TimeFramesProps>;
  };
  componentClasses?: {
    contentWrapper?: string;
    timeFrames?: string;
    dayContent?: string;
    weekContent?: string;
    monthContent?: string;
  };
}

/* =============
  contexts type
 ============= */
interface CalendarCanvasDateAction {
  type: "date:set";
  value: Date;
}
interface CalendarCanvasEventsAction {
  type: "events:init";
  value: CalendarCanvasEvent[];
}
interface CalendarCanvasViewAction {
  type: "view:set";
  value: CalendarCanvasViewUnion;
}
interface CalendarWeekGutterAction {
  type: "timegutter:set";
  value: number;
}
export type CalendarCanvasAction =
  | CalendarCanvasDateAction
  | CalendarCanvasEventsAction
  | CalendarCanvasViewAction
  | CalendarWeekGutterAction;

export interface CalendarCanvasContext<
  TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent,
> {
  date?: Date;
  view?: CalendarCanvasViewUnion;
  events?: TCalendarCanvasEvent[];
  /* The width of gutter on day and week header */
  timegutter?: number;
  dispatch?: (action: CalendarCanvasAction) => void;
}

// hooks
export interface UseCalendarReturnType<
  TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent,
> extends Omit<CalendarCanvasContext<TCalendarCanvasEvent>, "dispatch"> {
  /**
   * Use to set date to a specific date.
   * @param date: new date to set.
   */
  setDate: (date: Date) => void;
  /**
   * Navigate to next date frame.
   */
  nextDate: () => void;
  /**
   * Navigate to previous date frame.
   */
  prevDate: () => void;
  /**
   * Changes calendar view to current date.
   */
  viewToday: () => void;
  /**
   * Set view of the calendar
   * @param view: value can be one of - "week" | "month" | "day".
   */
  setView: (view: CalendarCanvasViewUnion) => void;
  /** Returns array of date with exactly 7 elements */
  getWeekDates: () => Date[];
  /** Returns array of date with exactly 35 elements */
  getMonthDates: () => Date[];
  /** Returns array of date with exactly 24 elements */
  getTimeFrames: () => Date[];
  /**
   * Set width of the time gutter. (usefull in week and optional in day)
   * @param width: width in pixel.
   */
  setTimeGutterWidth: (width: number) => void;
}

export interface UseShellEvents {
  date: Date;
}
