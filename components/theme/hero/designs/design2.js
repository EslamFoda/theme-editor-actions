import React, { useState } from "react";
import Container from "../../../ui/container";

const Design2 = ({ choose = false }) => {
  return (
    <>
      {choose ? (
        <>
          <div
            className="h-20 py-16 "
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1580197370215-38fdb17dfe8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1590&q=80)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className=" w-small bg-white space-y-2 p-2">
                <h1 className="text-small">
                  clothes is a leading business in the clothes industry
                </h1>
                <span className="block text-very-small">
                  Learn about our services and join our community today
                </span>
                <button className="w-full p-1 py-[2px] bg-primary text-white rounded-sm text-small">
                  shop now
                </button>
              </div>
            </Container>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Design2;
