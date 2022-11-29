import Container from "../../../ui/container";
const Design5 = ({ choose }) => {
  return (
    <div>
      {choose ? (
        <div className="flex pt-6  flex-col justify-center items-center gap-2">
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
                <button className="bg-red-500   w-full  text-white p-[1px] text-small">
                  Get in Touch
                </button>
                <button className=" border border-solid   w-full border-red-500 p-[1px] text-small">
                  learn more
                </button>
              </div>
            </div>
          </Container>
          <div
            style={{
              backgroundImage:
                "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-20  w-full"
          ></div>
        </div>
      ) : null}
    </div>
  );
};

export default Design5;
