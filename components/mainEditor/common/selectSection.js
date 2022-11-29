import { selectSectionOn } from "../../../features/add-section";
import { selectCompName } from "../../../features/comp-name";
import Image from "next/image";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../utlis/firebase";
const SelectSection = ({ sectionsImgs, dispatch, themeId }) => {
  const themeData = doc(db, "themes", themeId);
  return (
    <>
      {sectionsImgs.map(({ src, id, title }, i) => (
        <div
          className={`h-32 relative rounded-md  cursor-pointer min-w-[208px] `}
          key={id}
          onClick={async () => {
            await updateDoc(themeData, {
              compName: title,
              selectSection:true
            });
            // dispatch(selectCompName(title));
            // dispatch(selectSectionOn());
          }}
        >
          <div className="text-center h-full">
            <div className="w-full h-4/5 relative">
              <Image
                src={src}
                alt="section img"
                className="absolute"
                layout="fill"
              />
            </div>
            <h5 className="text-white">{title}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default SelectSection;
