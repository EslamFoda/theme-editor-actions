import Container from "../../../ui/container";
import Title from "../common/title";
import { clientsData } from "../../../../constant/";
import Image from "next/image";
import SubTitle from "../common/subTitle";

const Design2 = () => {
  return (
    <div className="bg-white w-full h-full">
        <Container className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center space-y-1  mb-5">
            <Title  title={"Our Clients"} />
            <SubTitle
              subTitle={
                "Some of the world’s biggest brands trust us with their services"
              }
            />
          </div>
          <div
            className={
              "grid lg:grid-cols-4 gap-1 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
            }
          >
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="border p-1 items-center border-gray-border flex justify-center"
              >
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
        </Container>
    </div>
  );
};

export default Design2;
