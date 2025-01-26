import { BoxPositionMeta } from "../types";
import useCalendarCanvas from "./useCalendarCanvas";

const useShellPositions = () => {
  const { view, getWeekDates, getMonthDates, date } = useCalendarCanvas();
  switch (view) {
    case "day": {
      const totalItems = 24; // Total divs to render
      const rowsPerItem = 60; // Each div spans 60 rows
      const itemsPerColumn = 24; // Each column has 24 items
      const positions: BoxPositionMeta[] = [];

      for (let i = 0; i < totalItems; i++) {
        const rowStart = (i % itemsPerColumn) * rowsPerItem + 1; // Position within the current column
        const rowEnd = rowStart + rowsPerItem;

        positions.push({
          date: date || new Date(),
          rowStart,
          rowEnd,
        });
      }

      return positions;
    }
    case "week": {
      const dates = getWeekDates();
      const totalItems = 168; // Total divs to render
      const rowsPerItem = 60; // Each div spans 60 rows
      const itemsPerColumn = 24; // Each column has 24 items
      const positions: BoxPositionMeta[] = [];

      for (let i = 0; i < totalItems; i++) {
        const columnIndex = Math.floor(i / itemsPerColumn); // Move to the next column after 24 items
        const rowStart = (i % itemsPerColumn) * rowsPerItem + 1; // Position within the current column
        const rowEnd = rowStart + rowsPerItem;
        positions.push({
          date: dates[columnIndex],
          rowStart,
          rowEnd,
        });
      }

      return positions;
    }
    case "month": {
      const dates = getMonthDates();
      const totalItems = 35; // Total divs to render
      const rowsPerItem = 1440 / 5;
      const itemsPerColumn = 5; // Each column has 24 items
      const positions: BoxPositionMeta[] = [];

      for (let i = 0; i < totalItems; i++) {
        const columnIndex = Math.floor(i / itemsPerColumn); // Move to the next column after 24 items
        const rowStart = (i % itemsPerColumn) * rowsPerItem + 1; // Position within the current column
        const rowEnd = rowStart + rowsPerItem;
        positions.push({
          date: dates[columnIndex],
          rowStart,
          rowEnd,
        });
      }

      return positions;
    }
  }
};
export default useShellPositions;
