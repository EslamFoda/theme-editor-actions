import ColorPalettes from "./colors/colorPallates";
import FontStyle from "./fonts/fontStyle";
import TextBar from "./textBar";
import CurrentEffect from "./effects/currentEffect";
interface Props {
  openColors: boolean;
  fontEdit: boolean;
  currentFont?: string;
  currentEffect?:string
  currentColor:string
}
const Bar = ({ openColors, fontEdit, currentFont,currentEffect,currentColor }: Props) => {
  const title = openColors
    ? "Choose Color palettes"
    : fontEdit
    ? "Choose Your Font"
    : "Effects";

  const subTitle =
    openColors || fontEdit
      ? "Your choice will affect all fonts of the site"
      : "Choose your Animation Effect";

  return (
    <div className="flex ">
      <TextBar title={title} subTitle={subTitle} />
      <div className="lg:w-72 md:w-72  space-y-2  p-4 border-r  border-solid border-[#353f4b] h-full">
        {openColors ? (
          <ColorPalettes currentColor={currentColor} allPaltes={false} label={"Current Color"} />
        ) : fontEdit ? (
          <FontStyle currentFont={currentFont} />
        ) : (
          <CurrentEffect currentEffect={currentEffect}/>
        )}
      </div>
    </div>
  );
};

export default Bar;
