import React from "react";
import Container from "../../../ui/container";

const Design4 = () => {
  return (
    <>
        <div className="bg-white w-full h-full">
          <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className={
                "flex  justify-center flex-col text-center space-y-2 items-center"
              }
            >
              <h1 className="text-small font-bold">About us</h1>
              <p className="text-very-small max-w-[150px]">
                Write a background about your work including your history your
                accomplishments and any awards you have received Use this
                section to showcase the features of your brand
              </p>
              <button className="text-white  rounded-sm bg-primary p-[1px] px-2   text-small ">
             Learn More
            </button>
            </div>
          </Container>
        </div>
    </>
  );
};

export default Design4;
