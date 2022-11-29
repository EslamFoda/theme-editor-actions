import Container from "../../../ui/container";

import TestiGridData from "./common/testiGridData";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
const Design1 = ({ choose }) => {
  return (
    <>
      {choose ? (
        <div>
          <Container className="p-1">
            <div className="text-center space-y-1 mb-4">
              <Title />
              <SubTitle />
            </div>
            <TestiGridData />
          </Container>
        </div>
      ) : null}
    </>
  );
};

export default Design1;
