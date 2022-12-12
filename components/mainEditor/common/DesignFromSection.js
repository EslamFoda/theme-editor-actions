import Designs from "./designs";
import useCompData from "../../../hooks/useCompData";
import { db } from "../../../utlis/firebase";
import { doc, updateDoc } from "firebase/firestore";
import useCloseEditor from "../../../hooks/useCloseEditor";
const DesignFromSection = ({
  designs,
  compName,
  nextIndex,
  comps,
  themeId,
}) => {
  const { compData } = useCompData(compName);
  const { handleCloseEditor } = useCloseEditor();
  const themeData = doc(db, "themes", themeId);

  const handleCreateSection = async (i) => {
    comps.splice(nextIndex, 0, {
      id: Math.floor(Math.random() * Date.now()).toString(),
      compName: compName,
      totalDesigns: designs.length,
      designNum: i + 1,
      compData: compData(),
      enableBgColor: false,
      bgImgColor: {
        r: 255,
        g: 255,
        b: 255,
        a: 0,
      },
      backgroundImage: "",
      selectedBgImg: "",
      backgroundColor: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      },
    });
    await updateDoc(themeData, {
      allSections: [...comps],
      selectSection: false,
    });
    handleCloseEditor();
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
