import { FC } from "react";
import ActiveIcon from "./activeIcon";
interface Props {
  colors?: [];
  i?: number;
  setCurrentColor?: any;
  color?: string;
  mode?: string;
  currentColor?: string;
  allPaltes: boolean;
  label?: string;
}

const ColorPalettes: FC<Props> = ({
  colors,
  i,
  setCurrentColor,
  color,
  mode,
  currentColor,
  allPaltes,
  label,
}) => {
  console.log(currentColor)
  const className = allPaltes
    ? [
        "h-full min-w-[220px] rounded-lg relative grid grid-cols-3  cursor-pointer",
        color && `theme-${color}`,
        mode && `theme-light`,
        `${
          color === currentColor
            ? "border-[#23cba5] border-[3px] border-solid"
            : "border-[3px] border-[#26313f]"
        }`,
      ]
        .filter(Boolean)
        .join(" ")
    : `h-[111px] relative border-[#23cba5] theme-${currentColor} theme-light rounded-lg border-[3px] border-solid grid grid-cols-3 w-full`;

  const handleSelectColors = () => {
    allPaltes ? setCurrentColor(colors[i], "theme-color") : "";
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
