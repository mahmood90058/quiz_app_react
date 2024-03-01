import React, { useEffect, useState } from "react";


const Timer = ({setStop, quesNum}) => {
  const [timer, setTimer] = useState(30);


  useEffect(() => {
    if(timer===0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [setStop,timer]);


//   agar question change hota hai toh hamara settimer phir se 3 se start hoga

// ye phir se restart krega jaise ques change hoga

  useEffect(()=>{
    setTimer(30);
  },quesNum)

  return <div>{timer}</div>;
};

export default Timer;
