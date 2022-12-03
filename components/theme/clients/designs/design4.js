import Container from "../../../ui/container";
import Title from "../common/title";
import { clientsData } from "../../../../constant/";
import Image from "next/image";
import SubTitle from "../common/subTitle";

const Design4 = () => {
  return (
    <div className="bg-white w-full h-full">
        <Container className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 gap-1">
            <div className="self-center">
              <div className="  space-y-4 ">
                <Title  title={"Our Clients"} />
                <SubTitle
                  subTitle={
                    "Some of the world’s biggest brands trust us with their services"
                  }
                />
              </div>
            </div>
            <div className="col-span-2">
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
        </Container>
    </div>
  );
};

export default Design4;
