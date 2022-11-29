import React from "react";
import Container from "../../../ui/container";

const Design1 = ({
  choose = false,
}) => {

  return (
    <>
      {choose ? (
        <div className="">
          <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-between gap-2 items-center">
              <div className="flex  flex-col h-20 w-small">
                <p className="text-small">
                  clothes is a leading business in the clothes industry
                </p>
                <span className="mt-1 text-very-small">
                  Learn about our services and join our community today
                </span>
                <div className="flex items-center w-full justify-between gap-2 mt-4">
                  <button className="bg-red-500 text-small flex-1 text-white">
                    shop now
                  </button>
                  <button className="flex-1 text-small border border-solid  border-red-500 ">
                    learn more
                  </button>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
                  backgroundSize: "cover",
                  MozBackgroundSize: "center center",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-20  w-small   bg-blue-100"
              ></div>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
};

export default Design1;
