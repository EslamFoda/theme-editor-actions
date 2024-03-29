import Title from "../common/title";
import { clientsData } from "../../../../constant/";
import Image from "next/image";
import SubTitle from "../common/subTitle";

const Design5 = () => {
  return (
    <div className="bg-white w-full h-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-1">
          <div className="p-2  bg-gradient-to-b from-primary to-secondary  text-white  h-full">
            <div className="h-28 flex justify-center  flex-col space-y-2 ">
              <Title  title={"Our Clients"} />
              <SubTitle
                subTitle={
                  "Some of the world’s biggest brands trust us with their services"
                }
              />
            </div>
          </div>
          <div className="self-center">
            <div className={"flex  flex-wrap items-center"}>
              {clientsData.map((client) => (
                <div key={client.id} className="p-1 items-center  ">
                  <div className="relative h-4 w-6">
                    <Image
                      src={client.img}
                      layout="fill"
                      objectFit="contain"
                      className="absolute"
                      alt="client picture"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Design5;
