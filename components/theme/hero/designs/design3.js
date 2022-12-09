import React from "react";
const Design3 = ({ choose = false }) => {
  return (
    <>
      {choose ? (
        <div className="bg-gradient-to-b from-primary to-secondary w-full h-full text-center flex items-center justify-center text-white">
          <div>
            <h1 className="text-small">
              clothes is a leading business in the clothes industry
            </h1>
            <span className="text-very-small">
              Learn about our services and join our community today
            </span>
            <div className="flex justify-center mt-2 items-center gap-1">
              <button className="bg-white text-primary rounded-sm p-1 px-2 text-very-small">Shop Now</button>
              <button className="p-1 text-very-small border border-solid px-2 rounded-sm border-white">
                Learn More
              </button>
            </div>
          </div>
         </div>
      ) : null}
    </>
  );
};

export default Design3;
