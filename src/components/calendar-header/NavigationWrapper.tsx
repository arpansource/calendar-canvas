import React from "react";
import { Icon, IWrapper } from "../../types";
import useCalendarCanvas from "../../hooks/useCalendarCanvas";
interface NavigateWrapperProps extends IWrapper {
  nextIcon?: Icon;
  prevIcon?: Icon;
}
const NavigationWrapper: React.FC<NavigateWrapperProps> = ({
  children,
  nextIcon = ArrowLeft,
  prevIcon = ArrowRight,
}) => {
  const { nextDate, prevDate } = useCalendarCanvas();
  const NextIcon = nextIcon;
  const PrevIcon = prevIcon;
  return (
    <div className="navigation-wrapper">
      <button onClick={() => prevDate()}>
        <PrevIcon />
      </button>
      {children}
      <button onClick={() => nextDate()}>
        <NextIcon />
      </button>
    </div>
  );
};

const ArrowRight: Icon = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
    </svg>
  );
};

const ArrowLeft: Icon = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
    </svg>
  );
};

export default NavigationWrapper;
