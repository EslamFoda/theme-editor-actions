import Container from "../../../ui/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryDatas } from "../../../../constant/";
import Image from "next/image";

const Design3 = () => {
  return (
    <div className="bg-white w-full h-full">
      <Container className="py-0 pt-2">
        <div className="text-center space-y-1  mb-2">
          <Title />
          <SubTitle />
        </div>
        <div
          className={"grid gap-1 lg:grid-cols-2 md:grid-cols-2  grid-cols-2"}
        >
          {galleryDatas.map((gallery) => (
            <div
              key={gallery.id}
              className="relative hover:shadow-custom transition-all h-12 w-full"
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

export default Design3;
