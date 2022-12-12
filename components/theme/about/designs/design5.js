import React from "react";

import Container from "../../../ui/container";
const Design5 = () => {
  return (
    <>
      <div className="bg-white  w-full h-full">
        <Container className="absolute pt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className={
              "flex max-w-[160px] m-auto justify-center flex-col text-center space-y-2 items-center"
            }
          >
            <h1 className="text-small font-bold">About us</h1>
            <p className="text-very-small max-w-[150px]">
              Write a background about your work including your history your
              accomplishments and any awards you have received Use this section
              to showcase the features of your brand
            </p>
            <button className="text-primary p-[1px] px-2 border border-primary border-solid  text-small ">
              Learn More
            </button>
            <div
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1483706571191-85c0c76b1947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79d169c2bf199ce6912f72c20ec301e4&auto=format&fit=crop&w=500&q=80')",
              }}
              className="h-16 lg:w-full bg-no-repeat service-img bg-center w-full bg-cover "
            ></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design5;
