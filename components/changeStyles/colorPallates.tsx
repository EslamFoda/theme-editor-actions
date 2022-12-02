import { doc, updateDoc } from "firebase/firestore";
import { FC } from "react";
import useMainData from "../../hooks/useMainData";
import { db } from "../../utlis/firebase";
import ActiveIcon from "./activeIcon";
interface Props {
  colors?: [];
  i?: number;
  setCurrentColor?: any;
  color?: string;
  currentColor?: string;
  allPaltes: boolean;
  label?: string;
  docRef: any;
}

const ColorPalettes: FC<Props> = ({
  colors,
  i,
  color,
  currentColor,
  allPaltes,
  label,
  docRef,
}) => {
  const className = allPaltes
    ? [
        "h-full min-w-[220px] rounded-lg relative grid grid-cols-3  cursor-pointer",
        color && `theme-${color}`,
        `theme-light`,
        `${
          color === currentColor
            ? "border-[#23cba5] border-[3px] border-solid"
            : "border-[3px] border-[#26313f]"
        }`,
      ]
        .filter(Boolean)
        .join(" ")
    : `h-[111px] relative border-[#23cba5] theme-${currentColor} theme-light rounded-lg border-[3px] border-solid grid grid-cols-3 w-full`;

  const handleSelectColors = async () => {
    allPaltes
      ? await updateDoc(docRef, {
          themeColor: colors[i],
        })
      : "";
  };

  const labels = allPaltes ? color.replace(/-/g, " ") : label;

  return (
    <div key={i} onClick={handleSelectColors} className={className}>
      <div className="bg-primary h-full w-full"></div>
      <div className="bg-secondary h-full w-full"></div>
      <div className="bg-white h-full w-full"></div>
      <div className="absolute bottom-0 p-2 right-0 px-4 w-full bg-[#353f4b]">
        {" "}
        <span className="text-white font-mono">{labels}</span>
      </div>
      <ActiveIcon styles={color} currentStyle={currentColor} />
    </div>
  );
};

export default ColorPalettes;
