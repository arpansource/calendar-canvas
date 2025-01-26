import { DayTemplateProps } from "../../../types";

const DayTemplate: React.FC<DayTemplateProps> = ({ event, style }) => {
  return (
    <div className="day-template" style={style}>
      <div>{event?.title}</div>
    </div>
  );
};
export default DayTemplate;
