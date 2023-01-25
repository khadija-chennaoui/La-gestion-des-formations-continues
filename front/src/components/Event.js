

import { useState, useEffect } from 'react';

function Event() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p> Levenment de Job Deting : {date.toString()}</p>
    </div>
  );
}

export default Event
