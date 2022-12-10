import { MdOutlineDone } from "react-icons/md";

const FontStyle = ({ currentFont }) => {
  return (
    <div
      className={`lg:h-[111px] md:h-[111px] h-full relative border-[#23cba5] bg-[#353f4b] lg:p-4 md:p-4 p-2 text-white  rounded-lg border-[3px] border-solid w-full font font-choosedFont fontName-${currentFont}`}
    >
      <div className="space-y-3">
        <h3 className="lg:text-2xl md:text-2xl text-sm font-black">Headline Font</h3>
        <span className="block lg:text-sm md:text-sm text-xs opacity-80">
          font for the rest of text
        </span>
      </div>
      <div className="absolute -top-2 -left-2 rounded-full p-1 bg-[#23cba5]">
        <MdOutlineDone color="white" size={18} />
      </div>
    </div>
  );
};

export default FontStyle;
