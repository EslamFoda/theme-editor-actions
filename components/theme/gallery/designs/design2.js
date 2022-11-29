import Container from "../../../ui/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryDatas } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";

const Design2 = ({ device, choose }) => {
  return (
    <>
      {choose ? (
        <Container className="py-0 pt-2">
          <div className="text-center">
            <Title choose={choose} />
            <SubTitle choose={choose} />
            <button className="text-very-small bg-primary p-[2px] text-white">
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
                />
              </div>
            ))}
          </div>
        </Container>
      ) : null}
    </>
  );
};

export default Design2;
