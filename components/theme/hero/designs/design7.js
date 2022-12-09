import React from "react";
const Design7 = ({ choose = false }) => {
  return (
    <>
      {choose ? (
        <div className="bg-white w-full h-full text-center flex items-center justify-center relative text-black">
             <div className="w-[100px] h-[100px] top-3  absolute bg-primary opacity-40 rotate-[65deg] rounded-lg drop-shadow-lg backdrop-filter -right-[80px]"></div>
        <div className="w-[100px] h-[100px] top-3  absolute bg-primary opacity-70 rotate-45 rounded-lg drop-shadow-lg backdrop-filter -right-[80px]"></div>
        <div className="w-[160px] h-[160px] drop-shadow-lg backdrop-filter rotate-45 absolute left-[-30px] bottom-[-170px] rounded-lg   bg-primary opacity-40"></div>
          <div>
            <h1 className="text-small">
              clothes is a leading business in the clothes industry
            </h1>
            <span className="text-very-small">
              Learn about our services and join our community today
            </span>
            <div className="flex justify-center mt-2 items-center gap-1">
              <button className="bg-primary text-white rounded-sm p-1 px-2 text-very-small">Shop Now</button>
              <button className="p-1 text-very-small border border-solid px-2 text-primary rounded-sm border-primary">
                Learn More
              </button>
            </div>
          </div>
         </div>
      ) : null}
    </>
  );
};

export default Design7;
