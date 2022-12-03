import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import Name from "../common/name";
import Position from "../common/position";
import About from "../common/about";
import { teamsData } from "../../../../constant";

const Design2 = () => {
  return (
    <div className="bg-white w-full h-full">
      <Container className="py-2 ">
        <div className="text-center space-y-1  mb-2">
          <Title />
          <SubTitle />
        </div>
        <div
          className={
            "grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
          }
        >
          {teamsData?.map((team) => (
            <div key={team.id} className="text-center space-y-1">
              <div
                style={{ backgroundImage: `url(${team.img})` }}
                className="bg-no-repeat bg-center bg-cover   h-12 w-full"
              ></div>
              <Name name={team.name} />
              <Position position={team.position} />
              <About about={team.about} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Design2;
