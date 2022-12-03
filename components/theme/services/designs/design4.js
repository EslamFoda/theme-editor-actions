import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
import { servicesData } from "../../../../constant/";

const Design4 = () => {
  return (
    <div className="bg-white w-full h-full">
      <Container className="py-2 ">
        <div className="text-center space-y-1 mb-2">
          <Title />
          <SubTitle />
        </div>
        <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white shadow-xl">
              <div
                style={{ backgroundImage: `url(${service.imgUrl})` }}
                className="bg-no-repeat bg-center bg-cover overflow-hidden relative h-14 w-full"
              >
                <svg
                  className="absolute -bottom-1 left-0 w-[100%]  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#fff"
                    fill-opacity="1"
                    d="M0,64L60,90.7C120,117,240,171,360,160C480,149,600,75,720,74.7C840,75,960,149,1080,170.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="px-1 -mt-1 ">
                <ServiceTitle title={service.title} />
                <ServiceSubTilte subTitle={service.subTitle} />
                <button className="text-red-600 text-very-small">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Design4;
