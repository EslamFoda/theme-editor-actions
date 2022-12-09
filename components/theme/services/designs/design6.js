import Container from "../../../ui/container";
import { servicesData } from "../../../../constant/";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
const Design6 = () => {
  return (
    <>
      <div className="bg-gradient-to-bl text-white from-primary to-secondary">
        <Container className="py-1">
          <div className="text-center  space-y-1  mb-2">
            <Title />
            <SubTitle />
          </div>
          <div className={"flex items-start gap-2 justify-center flex-wrap"}>
            {servicesData?.map((service, index) => (
              <div key={service.id}>
                <div
                  key={service.id}
                  className="space-y-1 lg:w-[70px] md:w-[80px] w-full min-h-[87px]   hover:border-b-2 hover:border-white border-b-2 border-transparent transition-all bg-secondary rounded-sm px-1 "
                >
                  <div>
                    <span className="text-small">
                      {index < 9 ? `0${index + 1}` : `${index + 1}`}
                    </span>
                  </div>
                  <ServiceTitle title={service.title} />
                  <div className="w-5 h-[1px] bg-white"></div>
                  <ServiceSubTilte subTitle={service.subTitle} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design6;
