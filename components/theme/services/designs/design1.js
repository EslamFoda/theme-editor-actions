import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
import { servicesData } from "../../../../constant/";

const Design1 = () => {
  return (
    <div className="bg-white w-full h-full">
      <Container className="py-0 pt-2">
        <div className="text-center space-y-1  mb-2">
          <Title />
          <SubTitle />
        </div>
        <div
          className={
            "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
          }
        >
          {servicesData.map((service) => (
            <div key={service.id} className="text-center space-y-1">
              <div
                style={{ backgroundImage: `url(${service.imgUrl})` }}
                className="bg-no-repeat bg-center bg-cover overflow-hidden m-auto h-6 w-6 rounded-full"
              ></div>
              <ServiceTitle title={service.title} />
              <ServiceSubTilte subTitle={service.subTitle} />
              <button className="text-primary !-mt-2 text-very-small">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Design1;
