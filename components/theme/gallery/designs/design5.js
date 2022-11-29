import Container from "../../../ui/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryDatas } from "../../../../constant/";
import Image from "next/image";

const Design5 = ({ choose }) => {
  return (
    <>
      {choose ? (
        <Container clean className="py-0 pt-2">
          <div className="text-center space-y-1  mb-2">
            <Title choose={choose} />
            <SubTitle choose={choose} />
            <button className="text-very-small bg-primary text-white p-[2px]">
              Start Now
            </button>
          </div>
          <div
            className={
              "grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2"
            }
          >
            {galleryDatas.map((gallery) => (
              <div key={gallery.id} className="relative  h-12 w-full">
                <Image
                  src={gallery.img}
                  className="absolute"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </Container>
      ) : null}
    </>
  );
};

export default Design5;
