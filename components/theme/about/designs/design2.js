import React from "react";
import Container from "../../../ui/container";

const Design2 = ({ choose = false }) => {
  return (
    <>
      {choose ? (
        <div className="">
          <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="grid lg:grid-cols-2 gap-2 grid-cols-1 sm:grid-cols-1">
              <div>
                <h1 className="text-small font-bold">About us</h1>
              </div>
              <div>
                <p className="text-very-small">
                  Write a background about your work including your history your
                  accomplishments and any awards you have received Use this
                  section to showcase the features of your brand
                </p>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
};

export default Design2;
