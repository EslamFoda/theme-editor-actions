import Container from "../../../ui/container";

import { pricesData } from "../../../../constant/index";
const Design2 = () => {
  return (
    <>
      <div className="h-full w-full bg-white">
        <Container className="py-1">
          <div className="text-center space-y-1 mb-2">
            <h1 className="text-small">pricing plans</h1>
            <p className="text-very-small">
              14 days free trial on all packages
            </p>
          </div>
          <div className="grid lg:grid-cols-2  md:grid-cols-2  grid-cols-1 gap-2">
            {pricesData.map((price, index) => (
              <div
                className=" flex  rounded-md flex-col text-center self-start"
                key={price.id}
              >
                <div className="space-y-1 p-1">
                  <h1 className="text-small">{price.title}</h1>
                  <h2 className="text-very-small text-primary">
                    {price.price}
                  </h2>
                  <p className="text-very-small text-center m-auto max-w-[95px]">
                    {price.subTitle}
                  </p>

                  <button className="text-very-small bg-primary px-1 text-white  py-[2px]">
                    {price.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design2;
