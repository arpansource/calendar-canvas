import React from "react";
import { CalendarCanvasProps } from "../types";
import styles from "./main.module.css";
const CalendarCanvas: React.FC<CalendarCanvasProps> = ({ children }) => {
  return <div className={styles["canvas-calendar"]}>see this{children}</div>;
};
export default CalendarCanvas;
