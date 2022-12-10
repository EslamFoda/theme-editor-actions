import { updateDoc } from "firebase/firestore";
import { FC } from "react";
import ActiveIcon from "../activeIcon";
interface Props {
  fonts?: [];
  i?: number;
  docRef: any;
  currentFont?: string;
  font: string;
}

const AllFonts: FC<Props> = ({ font, docRef, i, currentFont, fonts }) => {
  const handleSelectFont = async () => {
    await updateDoc(docRef, {
      themeFont: fonts[i],
    });
  };

  return (
    <div
      key={i}
      onClick={handleSelectFont}
      className={[
        "lg:h-full md:h-full h-[70px] lg:min-w-[220px] md:min-w-[220px] min-w-[160px] rounded-lg relative text-white lg:p-4 md:p-4 p-2 font font-choosedFont  bg-[#353f4b]  cursor-pointer",
        currentFont && `fontName-${font}`,

        `${
          font === currentFont
            ? "border-[#23cba5] border-[3px] border-solid"
            : "border-[3px] border-[#26313f]"
        }`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="space-y-3">
        <h3 className="lg:text-2xl md:text-2xl text-sm font-black">Headline Font</h3>
        <span className="block lg:text-sm md:text-sm text-xs opacity-80">
          font for the rest of text
        </span>
      </div>
      <ActiveIcon styles={font} currentStyle={currentFont} />
    </div>
  );
};

export default AllFonts;
