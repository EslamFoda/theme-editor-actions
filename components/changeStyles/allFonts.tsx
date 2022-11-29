import { FC } from "react";
import { MdOutlineDone } from "react-icons/md";
import ActiveIcon from "./activeIcon";
interface Props {
  fonts?: [];
  i?: number;
  setCurrentFont?: any;
  //   color?: string;
  //   mode?: string;
  currentFont?: string;
  //   allPaltes: boolean;
  //   label?: string;
  font: string;
}

const AllFonts: FC<Props> = ({
  font,
  i,
  currentFont,
  setCurrentFont,
  fonts,
  //   colors,
  //   color,
  //   mode,
  //   allPaltes,
  //   label,
}) => {
  //   const className = allPaltes
  //     ? [
  //         "h-full min-w-[220px] rounded-lg relative grid grid-cols-3  cursor-pointer",
  //         color && `theme-${color}`,
  //         mode && `theme-${mode}`,
  //         `${
  //           color === currentColor
  //             ? "border-[#23cba5] border-[3px] border-solid"
  //             : "border-[3px] border-[#26313f]"
  //         }`,
  //       ]
  //         .filter(Boolean)
  //         .join(" ")
  //     : "h-[111px] relative border-[#23cba5] rounded-lg border-[3px] border-solid grid grid-cols-3 w-full";

  const handleSelectFont = () => {
    setCurrentFont(fonts[i], "theme-font");
  };

  //   const labels = allPaltes ? color.replace(/-/g, " ") : label;

  //   className={[
  //     `font font-choosedFont`,
  //     currentFont && `fontName-${currentFont}`,
  //     currentColor && `theme-${currentColor}`,
  //     mode && `theme-${mode}`,
  //   ]
  //     .filter(Boolean)
  //     .join(" ")}

  return (
    <div
      key={i}
      onClick={handleSelectFont}
      className={[
        "h-full min-w-[220px] rounded-lg relative text-white p-4 font font-choosedFont  bg-[#353f4b]  cursor-pointer",
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
        <h3 className="text-lg font-black">Headline Font</h3>
        <span className="block text-sm opacity-80">
          font for the rest of text
        </span>
      </div>
      <ActiveIcon styles={font} currentStyle={currentFont} />
    </div>
  );
};

export default AllFonts;
