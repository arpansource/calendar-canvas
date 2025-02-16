---
sidebar_position: 6
sidebar_label: "Type Reference"
---

# Type Reference

Complete type reference for Calendar Canvas library.

## Core Types

### CalendarCanvasEvent {#calendar-canvas-event}
Base interface that defines the structure of calendar events. Used to display and manage events throughout the calendar.
```typescript
interface CalendarCanvasEvent {
  startDate: Date;
  endDate: Date;
  title: string;
}
```

### CalendarCanvasEventOffset {#calendar-canvas-event-offset}
Defines positioning metrics for event rendering. Used internally to calculate and position events within the calendar grid.
```typescript
interface CalendarCanvasEventOffset {
  top: number;
  left: number;
  width: number;
  height: number;
}
```

### CalendarCanvasView {#calendar-canvas-view}
Defines available view types for the calendar. Used to switch between different calendar displays.
```typescript
enum CalendarCanvasView {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
}

type CalendarCanvasViewUnion = `${CalendarCanvasView}`;
```

## Base Interfaces

### IWrapper {#iwrapper}
Base interface for components that need to wrap child elements. Provides type safety for React children.
```typescript
interface IWrapper {
  children: React.ReactNode;
}
```

### IClassName {#iclassname}
Base interface for components that accept custom CSS classes. Enables styling customization.
```typescript
interface IClassName {
  className?: string;
}
```

### ICssProperties {#icss-properties}
Base interface for components that accept inline styles. Enables direct style manipulation.
```typescript
interface ICssProperties {
  style?: React.CSSProperties;
}
```

### Icon {#icon}
Type definition for SVG icon components. Used for navigation and action icons throughout the calendar.
```typescript
type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
```

### BoxPositionMeta {#box-position-meta}
Defines positioning metadata for calendar elements. Used for layout calculations.
```typescript
interface BoxPositionMeta {
  date: Date;
  rowStart: number;
  rowEnd: number;
}
```

## Component Props

:::info
Interfaces with generic type `TCalendarCanvasEvent` allow extending the base event type with custom properties while maintaining type safety.
:::

### CalendarCanvasProps {#calendar-canvas-props}
Main props interface for the CalendarCanvas component. Controls the initial state and configuration of the calendar.
```typescript
interface CalendarCanvasProps<TCalendarCanvasEvent extends object = CalendarCanvasEvent> {
  defaultDate?: Date;
  events?: TCalendarCanvasEvent[];
  defaultView?: CalendarCanvasViewUnion;
  timegutter?: number;
  children: React.ReactNode;
  className?: string;
}
```

### CalendarHeaderProps {#calendar-header-props}
Props for the calendar header component. Enables custom styling of the header section.
```typescript
interface CalendarHeaderProps extends IClassName {}
```

### TimeGutterProps {#time-gutter-props}
Props for the time gutter component. Controls the appearance of time indicators in week and day views.
```typescript
interface TimeGutterProps extends ICssProperties, IClassName {}
```

### CalendarContentWrapperProps {#calendar-content-wrapper-props}
Props for the main content wrapper. Provides structure for calendar content.
```typescript
interface CalendarContentWrapperProps extends IWrapper, IClassName {}
```

### CalendarContentHeaderProps {#calendar-content-header-props}
Props for the content header component. Controls the appearance of the content header section.
```typescript
interface CalendarContentHeaderProps extends IClassName {}
```

### MonthContentHeaderProps {#month-content-header-props}
Props for the month view header. Specific to month view display customization.
```typescript
interface MonthContentHeaderProps extends IClassName {}
```

### WeekHeaderLabelProps {#week-header-label-props}
Props for week header labels. Controls the display of week day labels.
```typescript
interface WeekHeaderLabelProps extends IClassName {
  date: Date;
}
```

### WeekContentHeaderProps {#week-content-header-props}
Props for week view header content. Enables customization of week view header display.
```typescript
interface WeekContentHeaderProps extends IClassName {
  templates?: {
    timeGutter?: React.FC<TimeGutterProps>;
    weekLabel?: React.FC<WeekHeaderLabelProps>;
  };
}
```

### TimeFramesProps {#time-frames-props}
Props for time frame components. Controls the display of time slots in week and day views.
```typescript
interface TimeFramesProps extends IClassName, ICssProperties {}
```

### DayLayoutProps {#day-layout-props}
Props for day view layout. Controls the structure and appearance of day view.
```typescript
interface DayLayoutProps extends ICssProperties, IClassName {}
```

### DayTemplateProps {#day-template-props}
Props for day view event templates. Enables custom rendering of events in day view.
```typescript
interface DayTemplateProps<TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent> extends ICssProperties {
  event?: TCalendarCanvasEvent;
}
```

### CalendarDayContentProps {#calendar-day-content-props}
Props for day view content. Controls the overall day view display and behavior.
```typescript
interface CalendarDayContentProps extends IClassName {
  layout?: React.FC<DayLayoutProps>;
  template?: React.FC<DayTemplateProps>;
}
```

### WeekLayoutProps {#week-layout-props}
Props for week view layout. Controls the structure and appearance of week view.
```typescript
interface WeekLayoutProps extends ICssProperties, IClassName {
  slotDate?: Date;
}
```

### WeekTemplateProps {#week-template-props}
Props for week view event templates. Enables custom rendering of events in week view.
```typescript
interface WeekTemplateProps<TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent> extends ICssProperties {
  event?: TCalendarCanvasEvent;
}
```

### CalendarWeekContentProps {#calendar-week-content-props}
Props for week view content. Controls the overall week view display and behavior.
```typescript
interface CalendarWeekContentProps extends IClassName {
  layout?: React.FC<WeekLayoutProps>;
  template?: React.FC<WeekTemplateProps>;
}
```

### MonthLayoutProps {#month-layout-props}
Props for month view layout. Controls the structure and appearance of month view.
```typescript
interface MonthLayoutProps extends ICssProperties, IWrapper, IClassName {
  slotDate?: Date;
  dateInMonth?: boolean;
}
```

### MonthTemplateProps {#month-template-props}
Props for month view event templates. Enables custom rendering of events in month view.
```typescript
interface MonthTemplateProps<TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent> extends ICssProperties {
  event?: TCalendarCanvasEvent;
}
```

### CalendarContentProps {#calendar-content-props}
Main props interface for calendar content. Controls the overall content display and templating.
```typescript
interface CalendarContentProps extends IClassName {
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
```

## Context Types

### CalendarCanvasContext {#calendar-canvas-context}
Main context interface for the calendar. Provides state and dispatch functions throughout the component tree.
```typescript
interface CalendarCanvasContext<TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent> {
  date?: Date;
  view?: CalendarCanvasViewUnion;
  events?: TCalendarCanvasEvent[];
  timegutter?: number;
  dispatch?: (action: CalendarCanvasAction) => void;
}
```

### CalendarCanvasAction {#calendar-canvas-action}
Defines all possible actions for calendar state management. Used with the calendar reducer.
```typescript
type CalendarCanvasAction =
  | { type: "date:set"; value: Date }
  | { type: "events:init"; value: CalendarCanvasEvent[] }
  | { type: "view:set"; value: CalendarCanvasViewUnion }
  | { type: "timegutter:set"; value: number };
```

## Hook Types

### UseCalendarReturnType {#use-calendar-return-type}
Return type for the useCalendar hook. Provides calendar state and utilities for calendar manipulation.
```typescript
interface UseCalendarReturnType<TCalendarCanvasEvent extends CalendarCanvasEvent = CalendarCanvasEvent> {
  date?: Date;
  view?: CalendarCanvasViewUnion;
  events?: TCalendarCanvasEvent[];
  timegutter?: number;
  setDate: (date: Date) => void;
  nextDate: () => void;
  prevDate: () => void;
  viewToday: () => void;
  setView: (view: CalendarCanvasViewUnion) => void;
  getWeekDates: () => Date[];
  getMonthDates: () => Date[];
  getTimeFrames: () => Date[];
  setTimeGutterWidth: (width: number) => void;
}
```

### UseShellEvents {#use-shell-events}
Interface for shell event handling. Used for basic date-related event handling.
```typescript
interface UseShellEvents {
  date: Date;
}
```

:::tip
All interfaces extending `IClassName` accept an optional `className` prop for styling customization.
:::