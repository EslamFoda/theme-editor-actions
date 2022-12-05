import { MdOutlineDone } from "react-icons/md";
import { useEffect } from "react";
import { FadeUp, Flip, NoAnimation, ZoomInUp } from "../icons";
const CurrentEffect = ({ currentEffect }) => {
  const effectIcon = () => {
    if (currentEffect === "fade-up") {
      return <FadeUp />;
    } else if (currentEffect === "flip-up") {
      return <Flip />;
    } else if (currentEffect === "zoom-in-up") {
      return <ZoomInUp />;
    } else {
      return <NoAnimation />;
    }
  };
  useEffect(() => {
    effectIcon();
  }, [currentEffect, effectIcon]);
  return (
    <div className="lg:h-[111px] md:h-[111px] h-[70px] relative border-[#23cba5] bg-[#353f4b] p-4 flex items-center gap-4 text-white  rounded-lg border-[3px] border-solid w-full ">
      {effectIcon()}
      <h4 className="lg:text-base md:text-base text-xs">{currentEffect.replace(/-/g, " ")}</h4>
      <div className="absolute -top-2 -left-2 rounded-full p-1 bg-[#23cba5]">
        <MdOutlineDone color="white" size={18} />
      </div>
    </div>
  );
};

export default CurrentEffect;
