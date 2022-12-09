import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { db } from "../../../utlis/firebase";
import { doc, updateDoc } from "firebase/firestore";

interface Props {
  selectSection: boolean;
  compName: string;
  themeId: string;
}
const ActionBarDesc: React.FC<Props> = ({
  selectSection,
  compName,
  themeId,
}) => {
  const themeData = doc(db, "themes", themeId);
  const handleBack = async () => {
    // @ts-ignore
    await updateDoc(themeData, {
      selectSection: false,
      compName: "",
    });
  };
  return (
    <div className="w-80 space-y-2  py-4 border-r mr-4 border-solid border-[#353f4b] lg:h-[164px] md:h-[164px] h-[80px]">
      {selectSection ? (
        <div className="flex flex-col  gap-2 ">
          <div
            className="border justify-self-start self-start border-white py-1 lg:px-5 md:px-5 px-2 rounded-full cursor-pointer hover:bg-white  hover:text-[#353f4b] text-white lg:text-xl md:text-xl text-sm inline-flex gap-2 font-semibold items-center"
            onClick={handleBack}
          >
            <FaArrowLeft size={15} />
            <span>back</span>
          </div>
          <h2 className="lg:text-3xl md:text-3xl text-sm font-bold text-white">
            {compName}
          </h2>
        </div>
      ) : (
        <>
          <h2 className="lg:text-2xl md:text-2xl text-sm  font-bold text-white">
            Choose your section
          </h2>
          <h5 className="text-white text-xs lg:text-base md:text-base">
            choose on of them
          </h5>
        </>
      )}
    </div>
  );
};

export default ActionBarDesc;
