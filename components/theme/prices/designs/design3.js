import Container from "../../../ui/container";

import { pricesData } from "../../../../constant/index";
const Design3 = () => {
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
          <div className="grid lg:grid-cols-3  md:grid-cols-2  grid-cols-1 gap-2">
            {pricesData.map((price, index) => (
              <div
                className={`w-full p-1 space-y-1 text-center border border-solid ${
                  index === 1 ? "border-primary" : ""
                }`}
                key={price.id}
              >
                <div className="space-y-1 ">
                  <h1 className="text-small">{price.title}</h1>
                  <h2 className="text-very-small text-primary">
                    {price.price}
                  </h2>
                  <p className="text-very-small text-center m-auto max-w-[55px]">
                    {price.features}
                  </p>

                  <button
                    className={`text-very-small rounded-xs px-2  py-[2px] ${
                      index !== 1
                        ? "!bg-white !text-black border-solid border-[#e5e7eb] border"
                        : "bg-primary text-white"
                    }`}
                  >
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

export default Design3;
