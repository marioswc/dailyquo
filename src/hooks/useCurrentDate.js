import { useState, useEffect } from "react";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const currentYear = currentDate.getFullYear();
  //   set the start date to the first day of the year
  const startDate = new Date(currentYear, 0, 1);
  const indexDays = Math.floor((currentDate - startDate) / 86400000);
  //   format the date to a more readable way
  const today = currentDate.toLocaleDateString("en-US", options);

  useEffect(() => {
    // set a timer to update the current date at midnight
    const midnight = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1,
    );
    const timeUntilMidNight = midnight - currentDate.getTime();
    const timer = setTimeout(() => {
      // console.log("Updating current date at midnight", timeUntilMidNight);
      setCurrentDate(new Date());
    }, timeUntilMidNight);

    return () => clearTimeout(timer);
  }, [currentDate]);

  return { indexDays, today };
}
