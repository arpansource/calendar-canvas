import { DayLayoutProps } from "../../../types";

const DayLayout: React.FC<DayLayoutProps> = ({ style, className }) => {
  return <div className={`day-layout ${className}`} style={style} />;
};

export default DayLayout;
