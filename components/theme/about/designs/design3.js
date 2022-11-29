import React from "react";
const Design3 = ({ choose = false }) => {
  return (
    <>
      {choose ? (
        <div className="grid absolute lg:grid-cols-2 grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
          <div
            className={"h-32 order-2 lg:order-1 md:order-1"}
            style={{
              backgroundImage:
                "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className={
              "space-y-1  order-1 lg:order-2 md:order-2 self-center p-2"
            }
          >
            <h1 className="text-small font-bold">About us</h1>
            <p className="text-very-small">
              Write a background about your work including your history your
              accomplishments and any awards you have received Use this section
              to showcase the features of your brand
            </p>
            <button className="text-small">more</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Design3;
