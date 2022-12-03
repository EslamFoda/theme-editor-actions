import Container from "../../../ui/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryDatas } from "../../../../constant/";
import Image from "next/image";

const Design5 = () => {
  return (
    <div className="bg-white w-full h-full">
      <Container clean className="py-0 pt-2">
        <div className="text-center space-y-1  mb-2">
          <Title />
          <SubTitle />
          <button className="text-very-small -mt-3 bg-primary p-[2px] px-2 rounded-sm text-white">
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
    </div>
  );
};

export default Design5;
