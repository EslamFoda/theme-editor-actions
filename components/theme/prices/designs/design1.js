import Container from "../../../ui/container";

import { pricesData } from "../../../../constant/index";
const Design1 = () => {
  return (
    <>
      <div className="h-full w-full bg-white">
        <Container className="py-1">
          <div className="text-center space-y-1 mb-2">
            <h1 className="text-small">pricing plans</h1>
            <p className="text-very-small">14 days free trial on all packages</p>
          </div>
          <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2">
            {pricesData.map((price, index) => (
              <div
                className=" flex  rounded-md flex-col self-start"
                key={price.id}
              >
                <div className="w-full flex flex-col gap-1 p-1  border border-solid border-black ">
                  <h1 className="text-small">{price.title}</h1>
                  <p className="text-very-small max-w-[55px]">{price.subTitle}</p>
                  <hr className="bg-black h-[2px] block" />
                  <div className="text-small ">
                    <h2 className="text-small font-bold text-primary">{price.price}</h2>
                  </div>

                
                  <button className="text-very-small bg-primary text-white w-full py-[2px]">{price.btn}</button>

                  <hr className="bg-black h-[3px] block" />

                  <span className="text-very-small max-w-[55px]">{price.features}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design1;
