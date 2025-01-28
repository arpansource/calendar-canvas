import { MonthContentHeaderProps } from "../../../types";

const MonthHeader: React.FC<MonthContentHeaderProps> = ({ className = "" }) => {
  return (
    <div className={`month-content-header ${className}`}>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, index) => (
        <div key={index}>{d}</div>
      ))}
    </div>
  );
};

export default MonthHeader;
