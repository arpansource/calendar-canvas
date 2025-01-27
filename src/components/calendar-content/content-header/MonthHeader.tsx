import { MonthContentHeaderProps } from "../../../types";

const MonthHeader: React.FC<MonthContentHeaderProps> = ({ className = "" }) => {
  return (
    <div
      className={`month-content-header grid grid-cols-7 w-full ${className}`}
    >
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, index) => (
        <div
          className="col-span-1 border grid place-content-center"
          key={index}
        >
          {d}
        </div>
      ))}
    </div>
  );
};

export default MonthHeader;
