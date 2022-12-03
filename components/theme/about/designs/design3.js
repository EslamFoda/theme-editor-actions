import React from "react";
const Design3 = () => {
  return (
    <>
      <div className="grid absolute bg-white lg:grid-cols-2 grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
        <div
          className={"h-32 order-2 lg:order-1 md:order-1"}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1483706571191-85c0c76b1947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79d169c2bf199ce6912f72c20ec301e4&auto=format&fit=crop&w=500&q=80)",
            backgroundSize: "cover",
            MozBackgroundSize: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className={"space-y-1  order-1 lg:order-2 md:order-2 self-center p-4"}
        >
          <h1 className="text-small font-bold">About us</h1>
          <p className="text-very-small">
            Write a background about your work including your history your
            accomplishments and any awards you have received Use this section to
            showcase the features of your brand
          </p>
          <button className="text-very-small text-primary">LEARN MORE</button>
        </div>
      </div>
    </>
  );
};

export default Design3;
