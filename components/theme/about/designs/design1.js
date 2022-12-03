import React from "react";
import Container from "../../../ui/container";

const Design1 = () => {
  return (
    <div className="bg-white w-full h-full">
        <Container className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-between gap-2 items-center ">
            <div className="flex text-[6px]  flex-col w-[100px]">
              <h2 className=" font-semibold">About Us</h2>
              <span className="my-2 text-[4px]">
                Write a background about your work including your history your
                accomplishments and any awards you have received Use this
                section to showcase the features of your brand
              </span>
              <button className="text-very-small text-left text-primary">LEARN MORE</button>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1483706571191-85c0c76b1947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79d169c2bf199ce6912f72c20ec301e4&auto=format&fit=crop&w=500&q=80)",
                backgroundSize: "cover",
                MozBackgroundSize: "center center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-20 w-[100px]   bg-blue-100"
            ></div>
          </div>
        </Container>
    </div>
  );
};

export default Design1;
