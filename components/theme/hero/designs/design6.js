import Container from "../../../ui/container";
const Design6 = () => {
  return (
    <div className=" bg-primary w-full h-full text-white relative">
      <Container className="h-full z-10 relative ">
        <div className=" space-y-2 lg:py-5 md:py-5 py-2 flex flex-col h-full  items-start justify-center">
          <h1 className="text-small">
            clothes is a leading business in the clothes industry
          </h1>
          <span className="text-very-small">
            Learn about our services and join our community today
          </span>
          <div className="flex items-center lg:flex-row md:flex-row flex-col  w-full gap-1 mt-4">
            <button className="bg-white text-primary rounded-sm p-1 px-2 text-very-small">
              Shop Now
            </button>
            <button className="p-1 text-very-small border border-solid px-2 text-white rounded-sm border-white">
              Learn More
            </button>
          </div>
        </div>
      </Container>
      <div
        className="absolute right-0 top-0 w-full h-full"
        style={{
          backgroundImage:
            "url('https://assets.wuiltsite.com/assets/mogacomedy2.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 0",
          backgroundSize: "contain",
        }}
      ></div>
    </div>
  );
};

export default Design6;
