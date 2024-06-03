import React from "react";
import  CountUp  from "react-countup";

const Numbercount = ({ start, end, duration }) => {
  return (
    <CountUp start={start} end={end} duration={duration} separator="," />
  );
};

export default Numbercount;
