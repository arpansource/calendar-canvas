---
sidebar_position: 1
---

# CalendarCanvas

Wrapper component for the calendar canvas.
This component is responsible for initializing the calendar canvas context and wrap the UI with a context provider.

## Usage

```jsx
import { CalendarCanvas } from "calendar-canvas";

function App() {
  return (
    <CalendarCanvas>{/*Other calendar components goes here.*/}</CalendarCanvas>
  );
}
export default App;
```

## Props

Calendar canvas accepts the following props:

| Prop name     | Type                      | Description                                                                                                                | Default value              |
| ------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `defaultDate` | `Date`                    | Initial date to be displayed on the calendar.                                                                              | `new Date()`               |
| `defaultView` | `CalendarCanvasViewUnion` | Initial view to be displayed on the calendar.                                                                              | `CalendarCanvasView.MONTH` |
| `events`      | `CalendarCanvasEvent<T>`  | Array of events that will be rendered on canvas. `T` being the custom type or interface that extends `CalendarCanvasEvent` | `[]`                       |
| `timegutter`  | `number`                  | Amount of space before the week and day header in pixels. The same applies as the width of `TimeFrames` component.         | `150`                      |

:::tip

- `CalendarCanvasViewUnion` is a union type that can be one of the following values:

  - `CalendarCanvasView.MONTH`
  - `CalendarCanvasView.WEEK`
  - `CalendarCanvasView.DAY`

:::

## Related

- [CalendarCanvasView](/docs/types#calendar-canvas-view)
- [CalendarCanvasEvent](/docs/types#calendar-canvas-event)