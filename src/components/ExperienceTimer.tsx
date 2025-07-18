import { useEffect, useState } from "react";
import { calculateTimer, type Timer } from "../utilities/calculateTimer";

export const ExperienceTimer = ({
  careerStartDate,
}: {
  careerStartDate: string;
}) => {
  const [timer, setTimer] = useState<Timer>(calculateTimer(careerStartDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(calculateTimer(careerStartDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnitClass =
    "inline-block min-w-[40px] text-sm sm:min-w-[38px] sm:text-base text-center";
  const labelClass = "block text-xs sm:text-sm font-normal leading-[1.4em]";

  return (
    <div>
      <div className="block text-center">
        <span className="pb-[5px] drop-shadow-[0_0_10px_#48C8FF] block">
          Since: Nov 2013
        </span>
      </div>
      {[
        { value: timer.years, label: "years" },
        { value: timer.months, label: "months" },
        { value: timer.days, label: "days" },
        { value: timer.hours, label: "hours" },
        { value: timer.minutes, label: "min" },
        { value: timer.seconds, label: "sec" },
      ].map((unit) => (
        <div key={unit.label} className={timeUnitClass}>
          {unit.value}
          <span className={labelClass}>{unit.label}</span>
        </div>
      ))}
    </div>
  );
};
