import React from "react";
import Container from "../../../ui/container";

const Design1 = ({ choose = false }) => {
  return (
    <>
      {choose ? (
        <div className="bg-gradient-to-b from-primary to-secondary w-full flex items-center justify-center h-full">
          <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col flex-col gap-2 items-center">
            <div className="flex self-center justify-self-center text-white  flex-col  w-small">
              <p className="text-small">
                clothes is a leading business in the clothes industry
              </p>
              <span className="mt-1 text-very-small">
                Learn about our services and join our community today
              </span>
              <div className="flex items-center w-full justify-between gap-2 mt-4">
                <button className="bg-white text-very-small flex-1 py-[3px] text-primary  ">
                  shop now
                </button>
                <button className="flex-1 text-very-small text-white border border-solid  border-white ">
                  learn more
                </button>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1580197370215-38fdb17dfe8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1590&q=80)",
                backgroundSize: "cover",
                MozBackgroundSize: "center center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-20  w-small   bg-blue-100"
            ></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Design1;
