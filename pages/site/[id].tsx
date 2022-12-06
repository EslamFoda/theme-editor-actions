import { useRouter } from "next/router";
import MainEditor from "../../components/mainEditor";

const Website = () => {
  const {
    query: { id },
  } = useRouter();
  return <>{id && <MainEditor id={id} />}</>;
};

export default Website;
