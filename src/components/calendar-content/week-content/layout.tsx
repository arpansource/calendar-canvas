import React from "react";
import { WeekLayoutProps } from "../../../types";
import dayjs from "dayjs";

const WeekLayout: React.FC<WeekLayoutProps> = ({ slotDate, style }) => {
  return (
    <div
      className="week-layout border-t w-full h-full"
      style={{
        ...style,
        ...(dayjs(slotDate).format("ddd").toLowerCase() !== "sat" && {
          borderRight: "1px solid black",
        }),
      }}
    />
  );
};
export default WeekLayout;
