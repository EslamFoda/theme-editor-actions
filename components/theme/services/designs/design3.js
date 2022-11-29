import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
import { servicesData } from "../../../../constant/";
import cn from "clsx";

const Design3 = ({ device, choose }) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
      "!gap-2": choose,
    }
  );

  return (
    <>
      {choose ? (
        <Container className="py-2 ">
          <div className="text-center space-y-1 mb-3">
            <Title choose={choose} />
            <SubTitle choose={choose} />
          </div>
          <div className={gridClassName}>
            {servicesData.map((service) => (
              <div key={service.id} className=" space-y-1">
                <div
                  style={{ backgroundImage: `url(${service.imgUrl})` }}
                  className="bg-no-repeat bg-center bg-cover p-1  flex items-end   h-16 w-full"
                >
                  {" "}
                  <div className="space-y-0 bg-white shadow-custom  p-1">
                    <ServiceTitle choose={choose} title={service.title} />
                    <ServiceSubTilte
                      choose={choose}
                      subTitle={service.subTitle}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      ) : null}
    </>
  );
};

export default Design3;
