import Container from "../../../ui/container";
const Design5 = ({ choose }) => {
  return (
    <div>
      {choose ? (
        <div className="flex pt-6 bg-white flex-col justify-center items-center gap-2">
          <Container>
            <div className="grid pb-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-1">
              <div>
                <h1 className=" text-small font-semibold max-w-3xl">
                  clothes is a leading business in the clothes industry
                </h1>
                <p className="text-very-small">
                  Learn about our services and join our community today
                </p>
              </div>
              <div className="flex flex-col lg:flex-row md:flex-col items-center w-full justify-center gap-1 ">
                <button className="bg-primary rounded-sm   w-full  text-white py-[2px] text-small">
                  Get in Touch
                </button>
                <button className=" border border-solid rounded-sm  text-primary  w-full border-primary py-[2px] text-small">
                  learn more
                </button>
              </div>
            </div>
          </Container>
          <div
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1580197370215-38fdb17dfe8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1590&q=80)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-24 w-full"
          ></div>
        </div>
      ) : null}
    </div>
  );
};

export default Design5;
