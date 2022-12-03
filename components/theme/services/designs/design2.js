import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
import { servicesData } from "../../../../constant/";

const Design2 = () => {
  return (
    <div className="bg-white w-full h-full">
        <Container className="py-2 ">
          <div
            className={"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-3"}
          >
            <Title  />
            <SubTitle  />
          </div>
          <div
            className={
              "grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
            }
          >
            {servicesData.map((service) => (
              <div key={service.id} className=" space-y-1">
                <div
                  style={{ backgroundImage: `url(${service.imgUrl})` }}
                  className="bg-no-repeat bg-center bg-cover   h-12 w-full"
                ></div>
                <ServiceTitle  title={service.title} />
                <ServiceSubTilte  subTitle={service.subTitle} />
                <button className="text-primary text-very-small">READ MORE</button>
              </div>
            ))}
          </div>
        </Container>
    </div>
  );
};

export default Design2;
