import Container from "../../../ui/container";
import { clientsData } from "../../../../constant/";
import Image from "next/image";
import Title from "../common/title";
import SubTitle from "../common/subTitle";

const Design1 = ({ device, choose }) => {
  return (
    <>
      {choose ? (
        <Container className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center space-y-1  mb-5">
            <Title choose={choose} title={"Our Clients"} />
            <SubTitle
              choose={choose}
              subTitle={
                "Some of the world’s biggest brands trust us with their services"
              }
            />
          </div>
          <div
            className={
              "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
            }
          >
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="relative justify-self-center h-4 w-6"
              >
                <Image
                  src={client.img}
                  layout="fill"
                  objectFit="contain"
                  className="absolute"
                  alt="client picture"
                />
              </div>
            ))}
          </div>
        </Container>
      ) : null}
    </>
  );
};

export default Design1;
