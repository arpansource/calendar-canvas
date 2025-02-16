---
sidebar_position: 2
---

# CalendarHeader

Header component for the calendar canvas that provides navigation controls and view switching functionality.
This component must be used within a `CalendarCanvas` component as it relies on the calendar canvas context.

## Usage

```jsx
import { CalendarCanvas, CalendarHeader } from "calendar-canvas";

function App() {
  return (
    <CalendarCanvas>
      <CalendarHeader />
      {/* Other calendar components */}
    </CalendarCanvas>
  );
}
export default App;
```

## Props

CalendarHeader accepts the following props:

| Prop name   | Type        | Description                                                      | Default value |
| ----------- | ----------- | ---------------------------------------------------------------- | ------------- |
| `className` | `string`    | Additional CSS class names to be applied to the header container | `""`          |

## Default Structure

By default, the CalendarHeader includes:

- Navigation buttons (Previous/Next)
- Current date display
- View switching controls (Month/Week/Day)

## Customization

There is two ways to customize the calendar-header.

- By simply overriding the default css classes - `calendar-header`, `calendar-header-navigations`, and `calendar-view-buttons`.
- By using the `useCalendarCanvas` hook for complete customization.


:::info

- This component must be used within a `CalendarCanvas` component
- It uses the calendar canvas context for state management
  :::

## Related

- [CalendarCanvas](/docs/components/calendar-canvas)
- [useCalendarCanvas](/docs/hooks/use-calendar-canvas)
