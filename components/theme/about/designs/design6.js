import React from "react";
import Container from "../../../ui/container";
const Design6 = () => {
  return (
    <div className="bg-white  w-full h-full">
      <Container className="flex justify-center items-center h-full w-full">
        <div className="flex lg:gap-8 md:gap-8 gap-1   mx-auto  lg:justify-between md:justify-center  justify-center items-center py-1 flex-wrap ">
          <div className="h-20 lg:w-[100px] shadow-big md:w-[100px] w-[100px]  relative  ">
            <div className="w-full  h-full">
              <div
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1483706571191-85c0c76b1947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79d169c2bf199ce6912f72c20ec301e4&auto=format&fit=crop&w=500&q=80)`,
                  zIndex: "100",
                }}
                className="bg-no-repeat relative service-img bg-center h-full w-full bg-cover"
              ></div>
            </div>
            <div
              style={{ zIndex: "0" }}
              className="bg-gradient-to-b from-primary to-secondary  absolute  lg:-top-1 lg:-left-1 md:-top-1 md:-left-1 -top-1 -left-1 w-full h-full"
            ></div>
          </div>
          <div className="flex  flex-col space-y-2 lg:w-[100px] md:w-[100px] w-[100px]">
            <h1 className="text-small font-bold">About us</h1>
            <p className="text-very-small max-w-[150px]">
              Write a background about your work including your history your
              accomplishments and any awards you have received Use this section
              to showcase the features of your brand
            </p>
            <button className="text-white self-start rounded-sm bg-primary p-[1px] px-2   text-small ">
             Learn More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Design6;
