import Container from "../../../ui/container";
const Design4 = ({
  choose,
}) => {
  

  return (
    <div>
      {choose ? (
        <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex  flex-col justify-center items-center text-center  gap-1">
            <div className="space-y-1  max-w-[120px]">
              <h1 className=" text-small font-semibold">
                clothes is a leading business in the clothes industry
              </h1>
              <p className=" text-very-small">
                Learn about our services and join our community today
              </p>
              <div className="flex items-center w-full justify-center gap-4 ">
                <button className="bg-red-500 text-small text-white p-[2px]">
                  Get in Touch
                </button>
                <button className=" border border-solid text-small border-red-500 p-[2px]">
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
              className="h-16  w-4/5"
            ></div>
          </div>
        </Container>
      ) : null}
    </div>
  );
};

export default Design4;
