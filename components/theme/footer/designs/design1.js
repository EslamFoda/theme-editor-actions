import React from "react";

const Design1 = ({ choose = false }) => {
  return <>{choose ? <div className="bg-white w-full h-full"></div> : null}</>;
};

export default Design1;
