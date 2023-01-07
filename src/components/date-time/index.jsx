import { useEffect, useState } from "react";

function DateTime() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  return (
    <p>
      Copyright Microsoft
      <br />
      {date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}
    </p>
  );
}

export default DateTime;
