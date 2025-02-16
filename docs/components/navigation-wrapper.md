---
sidebar_position: 3
---

# NavigationWrapper

A utility component that provides date navigation functionality with customizable navigation icons and content. This component is particularly useful when building custom calendar headers.

## Usage

```jsx
import { NavigationWrapper } from "calendar-canvas";

function CustomHeader() {
  return (
    <NavigationWrapper>
      {/* Content to be displayed between navigation buttons */}
      <span>Current Date Display</span>
    </NavigationWrapper>
  );
}
```

## Features

- Pre-built navigation buttons with default icons
- Automatic handling of next/previous date navigation
- Customizable navigation icons
- Flexible content placement through children prop

## Props

| Prop name   | Type        | Description                                          | Default value |
| ----------- | ----------- | ---------------------------------------------------- | ------------- |
| `children`  | `ReactNode` | Content to be rendered between navigation buttons    | `undefined`   |
| `nextIcon`  | `Icon`      | Custom icon component for the "next" button         | `ArrowLeft`   |
| `prevIcon`  | `Icon`      | Custom icon component for the "previous" button     | `ArrowRight`  |

## Custom Icons

You can provide custom icons by passing components that implement the `Icon` type:

```tsx
import React from 'react';
import { NavigationWrapper, Icon } from "calendar-canvas";

const CustomNextIcon: React.FC<Icon> = (props) => (
  <svg {...props}>
    {/* Your custom SVG path */}
  </svg>
);

const CustomPrevIcon: React.FC<Icon> = (props) => (
  <svg {...props}>
    {/* Your custom SVG path */}
  </svg>
);

function CustomHeader() {
  return (
    <NavigationWrapper
      nextIcon={CustomNextIcon}
      prevIcon={CustomPrevIcon}
    >
      <span>Current Date</span>
    </NavigationWrapper>
  );
}
```

## Default Structure

```tsx
<div className="navigation-wrapper">
  <button onClick={prevDate}>
    <PrevIcon />
  </button>
  {children}
  <button onClick={nextDate}>
    <NextIcon />
  </button>
</div>
```

## CSS Classes

The component uses the following CSS class:
- `.navigation-wrapper`: Applied to the main container div

:::tip
- NavigationWrapper automatically handles date navigation through the calendar canvas context
- The component works seamlessly with all calendar views (month, week, day)
- Navigation logic is handled internally - no need to implement your own navigation handlers
:::

:::info
- This component must be used within a `CalendarCanvas` component
- It uses the `useCalendarCanvas` hook internally for navigation functionality
- The `Icon` type requires implementing the standard SVG props interface
:::

## Examples

### Basic Usage
```jsx
import { NavigationWrapper } from "calendar-canvas";

function BasicHeader() {
  return (
    <NavigationWrapper>
      <h2>February 2025</h2>
    </NavigationWrapper>
  );
}
```

### With Custom Icons and Formatting
```jsx
import { NavigationWrapper } from "calendar-canvas";
import dayjs from "dayjs"; // assuming dayjs is installed
import { ChevronLeft, ChevronRight } from "your-icon-library";

function CustomHeader() {
  return (
    <NavigationWrapper
      nextIcon={ChevronRight}
      prevIcon={ChevronLeft}
    >
      <div className="date-display">
        {dayjs().format("MMMM YYYY")}
      </div>
    </NavigationWrapper>
  );
}
```

## Related

- [CalendarHeader](/docs/components/calendar-header)
- [useCalendarCanvas](/docs/hooks/use-calendar-canvas)
- [Icon Type Definition](/docs/types#icon)