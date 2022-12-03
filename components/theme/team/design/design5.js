import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import { teamsData } from "../../../../constant/";
import Name from "../common/name";
import Position from "../common/position";

const Design5 = () => {
  return (
    <div className="bg-white w-full h-full">
      <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-center space-y-1  mb-2">
          <Title />
          <SubTitle />
        </div>
        <div
          className={
            "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
          }
        >
          {teamsData.map((team) => (
            <div key={team.id} className="text-center p-1 space-y-1">
              <div
                style={{ backgroundImage: `url(${team.img})` }}
                className="bg-no-repeat bg-center bg-cover overflow-hidden  h-10 w-full "
              ></div>
              <Name name={team.name} />
              <Position position={team.position} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Design5;
