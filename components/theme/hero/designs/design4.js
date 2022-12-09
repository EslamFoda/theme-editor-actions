import Container from "../../../ui/container";
const Design4 = ({ choose }) => {
  return (
    <div>
      {choose ? (
        <div className="bg-white w-full h-full pt-4">
          <div className="flex  flex-col justify-center items-center text-center  gap-1">
            <div className="space-y-1  max-w-[120px]">
              <h1 className=" text-small font-bold">
                clothes is a leading business in the clothes industry
              </h1>
              <p className=" text-very-small">
                Learn about our services and join our community today
              </p>
              <div className="flex items-center w-full  justify-center gap-1 ">
                <button className="bg-primary rounded-sm text-very-small text-white py-[2px] px-2">
                  Get in Touch
                </button>
                <button className=" border rounded-sm border-solid text-primary text-very-small border-primary px-2 py-[2px]">
                  learn more
                </button>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1580197370215-38fdb17dfe8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1590&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                MozBackgroundSize: "center center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-24 mt-2  w-4/5"
            ></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Design4;
