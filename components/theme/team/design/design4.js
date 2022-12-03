import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import { teamsData } from "../../../../constant/";
import Name from "../common/name";
import Position from "../common/position";

const Design4 = ({ choose }) => {
  return (
    <div className="bg-white w-full h-full">
        <Container className="py-0 pt-2">
          <div className="text-center space-y-1  mb-2">
            <Title  />
            <SubTitle />
          </div>
          <div
            className={
              "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-2 w-full"
            }
          >
            {teamsData.map((team) => (
              <div key={team.id} className="text-center space-y-1">
                <div
                  style={{ backgroundImage: `url(${team.img})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden m-auto h-5 w-5 rounded-full"
                ></div>
                <Name name={team.name}  />
                <Position position={team.position} />
              </div>
            ))}
          </div>
        </Container>
    </div>
  );
};

export default Design4;
