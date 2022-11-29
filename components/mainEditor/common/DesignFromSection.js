import { selectSectionOff } from "../../../features/add-section";
import Designs from "./designs";
import useCompData from "../../../hooks/useCompData";
import { db } from "../../../utlis/firebase";
import { doc, updateDoc } from "firebase/firestore";
const DesignFromSection = ({
  designs,
  dispatch,
  compName,
  nextIndex,
  comps,
  themeId
}) => {
  const { compData } = useCompData(compName);
  const themeData = doc(db, "themes", themeId);

  const handleCreateSection = async (i) => {
    // dispatch(selectSectionOff());
    comps.splice(nextIndex, 0, {
      id: Math.floor(Math.random() * Date.now()).toString(),
      compName: compName,
      designNum: i + 1,
      compData: compData(),
      backgroundColor: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      },
    });
    await updateDoc(themeData, {
      allSections: [...comps],
      selectSection:false
    });
  };
  return (
    <>
      {designs?.map((Design, i) => (
        <div key={i}>
          <Designs
            Design={Design}
            comps={comps}
            i={i}
            nextIndex={nextIndex}
            handle={handleCreateSection}
          />
        </div>
      ))}
    </>
  );
};

export default DesignFromSection;
