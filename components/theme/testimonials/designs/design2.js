import Container from "../../../ui/container";

import Title from "./common/title";
import SubTitle from "./common/subTitle";
import { testimonialsData } from "../../../../constant";
const Design2 = () => {
  return (
    <>
        <div className="bg-white w-full h-full">
          <Container className="p-1">
            <div className="text-center space-y-1 mb-2">
              <Title />
              <SubTitle />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-1 gap-y-1">
              {testimonialsData?.map((client) => (
                <div key={client.id}>
                  <div>
                    <div className="w-full bg-white flex flex-col gap-1 self-start   p-2 pb-3 rounded-md  shadow-md relative">
                      <div
                        style={{ backgroundImage: `url(${client.pic})` }}
                        className="w-4 h-4 bg-no-reapeat bg-cover bg-center bg-white shadow-md absolute -bottom-2 rounded-full left-2 border-1 border-[#dfe0e1]"
                      ></div>
                      <p className="text-very-small ">{client.review}</p>
                    </div>
                    <div className="p-2 pt-3">
                      <h1 className="text-small">{client.name}</h1>
                      <p className="text-very-small font-semibold">
                        {client.position}
                      </p>
                    </div>
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
