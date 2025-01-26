import { WeekTemplateProps } from "../../../types";

const WeekTemplate: React.FC<WeekTemplateProps> = ({ event, style }) => {
  return (
    <div className="week-template" style={style}>
      <div>{event?.title}</div>
    </div>
  );
};
export default WeekTemplate;
