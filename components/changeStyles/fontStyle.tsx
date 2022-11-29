import { MdOutlineDone } from "react-icons/md";

const FontStyle = ({ currentFont }) => {
  return (
    <div
      className={`h-[111px] relative border-[#23cba5] bg-[#353f4b] p-4 text-white  rounded-lg border-[3px] border-solid w-full font font-choosedFont fontName-${currentFont}`}
    >
      <div className="space-y-3">
        <h3 className="text-2xl font-black">Headline Font</h3>
        <span className="block text-sm opacity-80">
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
