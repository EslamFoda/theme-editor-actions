import { useRouter } from "next/router";
import MainEditor from "../../components/mainEditor";

const Website = () => {
  const {
    query: { id },
  } = useRouter();
  console.log(id);
  return <>{id && <MainEditor id={id} />}</>;
};

export default Website;
