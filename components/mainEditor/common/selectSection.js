
import Image from "next/image";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../utlis/firebase";
const SelectSection = ({ sectionsImgs, themeId }) => {
  const themeData = doc(db, "themes", themeId);
  return (
    <>
      {sectionsImgs.map(({ src, id, title }, i) => (
        <div
          className={` lg:h-32 md:h-32 h-24 relative rounded-md  cursor-pointer lg:min-w-[208px] md:min-w-[208px] min-w-[160px] `}
          key={id}
          onClick={async () => {
            await updateDoc(themeData, {
              compName: title,
              selectSection:true
            });
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
            <h5 className="text-white text-xs lg:text-base md:text-base">{title}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default SelectSection;
