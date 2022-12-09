import Container from "../../../ui/container";

import { TbQuote } from "react-icons/tb";
import { testimonialsData } from "../../../../constant";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
const Design6 = () => {
  return (
    <>
      <div className="bg-white w-full h-full">
        <Container className="py-1">
          <div className="text-center space-y-1 mb-2">
            <Title />
            <SubTitle />
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-1">
            {testimonialsData?.map((client, index) => (
              <div key={client.id}>
                <div className="flex relative">
                  <div className="w-full h-full z-10 relative space-y-1 justify-between flex flex-col gap-1   p-1  rounded-md  bg-white shadow">
                    <TbQuote size={10} className='text-primary' />
                    <p className="text-very-small ">{client.review}</p>
                    <div className="space-y-1">
                      <div
                        style={{ backgroundImage: `url(${client.pic})` }}
                        className="w-4 h-4 bg-no-reapeat bg-cover bg-center bg-white shadow-md  rounded-full border-1 border-[#dfe0e1]"
                      ></div>
                      <div className="flex  items-center gap-2">
                        <h1 className="text-small">{client.name}</h1>
                        <p className="text-very-small font-semibold">
                          {client.position}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-md z-0 h-full absolute bg-gradient-to-r from-primary to-secondary -bottom-1 -right-1"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design6;
