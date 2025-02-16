---
sidebar_label: "Introduction"
sidebar_position: 1
---

# Introduction

Welcome to Calendar Canvas - a powerful and highly customizable calendar library built specifically for React applications.

## What is Calendar Canvas?

Calendar Canvas is a lightweight, zero-dependency calendar library that provides the essential logic and components for building calendar interfaces in React applications. What sets it apart is its "bring your own design" philosophy - you can use it with or without the default styling, making it perfect for projects that require a completely custom look and feel.

## Key Features

### 🎨 Design Freedom

- Ships with zero default styles - complete freedom to implement your own design
- Miniamal default styling available through `calendar-canvas/dist/main.css`
- Fully customizable components to match your application's design system

### 📅 Flexible Views

- Month view
- Week view
- Day view
- Ability to switch between views seamlessly

### 🛠 Development Approach

- **Hooks-First Architecture**: Access calendar logic through custom hooks to build your UI from scratch
- **Component Library**: Pre-built components available for rapid development
- **TypeScript Support**: Built with TypeScript for better development experience

### ⚡ Core Strengths

- 🚀 Lightweight and performant
- 📱 Responsive by design
- 🔧 Easy to integrate
- 🎯 Zero dependencies
- 💪 Built specifically for React
- 📦 Tree-shakeable

## Two Ways to Use

### 1. Using Pre-built Components

Perfect for quick implementation with customizable styling:

```tsx
import {
  CalendarCanvas,
  CalendarContent,
  CalendarContentHeader,
  CalendarContentWrapper,
  CalendarHeader,
} from "calendar-canvas";
import "calendar-canvas/dist/main.css";

function Calendar() {
  return (
    <CalendarCanvas events={events} defaultView="month">
      <CalendarHeader />
      <CalendarContentWrapper>
        <CalendarContentHeader />
        <CalendarContent />
      </CalendarContentWrapper>
    </CalendarCanvas>
  );
}
```

### 2. Using Hooks for Custom Implementation

For complete control over the UI while leveraging calendar logic:

```tsx
import { useCalendarCanvas } from "calendar-canvas/hooks";

function CustomCalendar() {
  const {
    CalendarCanvas,
    // ... more calendar logic
  } = useCalendarCanvas();

  return <CalendarCanvas>{/* Your custom implementation */}</CalendarCanvas>;
}
```

## Why Choose Calendar Canvas?

- **Flexibility**: From using pre-built components to building completely custom UIs
- **Performance**: Lightweight core with optimized rendering
- **Developer Experience**: Comprehensive TypeScript support and intuitive API
- **Customization**: Total control over styling and behavior
- **Maintenance**: Zero dependencies means fewer security risks and smaller bundle size

## Ready to Start?

- Check out our [Quick Start Guide](/docs/quick-start) to begin building
- Deep dive into [Components](/docs/category/components) to understand how to implement them.
- View our [Hooks Reference](/docs/api) to see how they can be used to create custom UIs.

## Need Help?

- GitHub Issues: Report bugs or request features
- Email Support: [ap0661236@gmail.com](mailto:ap0661236@gmail.com)
- Website: [https://abhishekprajapati1.com](https://abhishekprajapati1.com)
