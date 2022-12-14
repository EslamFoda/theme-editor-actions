import Container from "../../../ui/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryDatas } from "../../../../constant/";
import Image from "next/image";

const Design2 = () => {
  return (
    <div className="bg-white w-full h-full">
      <Container className="py-0 pt-2">
        <div className="text-center">
          <Title />
          <SubTitle />
          <button className="text-very-small -mt-3 bg-primary p-[2px] px-2 rounded-sm text-white">
            Start Now
          </button>
        </div>
        <div
          className={
            "grid gap-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2"
          }
        >
          {galleryDatas.map((gallery) => (
            <div
              key={gallery.id}
              className="relative hover:shadow-custom transition-all lg:h-10 md:h-12 h-12 w-full"
            >
              <Image
                src={gallery.img}
                className="absolute"
                objectFit="cover"
                layout="fill"
                alt="gallery img"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Design2;
