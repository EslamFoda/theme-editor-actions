import Bar from "./bar";
import ColorPalettes from "./colors/colorPallates";
import AllFonts from "./fonts/allFonts";
import AllEffects from "./effects/allEffects";
import CloseEditor from "../mainEditor/common/closeEditor";
import { doc } from "firebase/firestore";
import { db } from "../../utlis/firebase";
import Colors from "./colors/colors";
import Fonts from "./fonts";

const ChangeStyles = ({
  currentEffect,
  editEffects,
  effects,
  colors,
  currentColor,
  openColors,
  fontEdit,
  fonts,
  currentFont,
  themeId,
}) => {
  const docRef = doc(db, "themes", themeId);
  return (
    <div className="bg-[#26313f] flex lg:flex-row md:flex-row flex-col px-5 relative">
      <Bar
        currentColor={currentColor}
        openColors={openColors}
        fontEdit={fontEdit}
        currentFont={currentFont}
        currentEffect={currentEffect}
      />
      <div className="lg:h-40 md:h-40 h-28 overflow-y-hidden  border-t  border-solid border-[#353f4b]  flex items-center gap-4 lg:p-4 md:p-4 p-0  overflow-auto    w-full">
        {openColors && (
          <Colors colors={colors} currentColor={currentColor} docRef={docRef} />
        )}
        {fontEdit && (
          <Fonts currentFont={currentFont} docRef={docRef} fonts={fonts} />
        )}
        {editEffects
          ? effects?.map((effect, i) => {
              return (
                <AllEffects
                  docRef={docRef}
                  effects={effects}
                  effect={effect}
                  i={i}
                  key={i}
                  currentEffect={currentEffect}
                />
              );
            })
          : null}
      </div>
      <CloseEditor />
    </div>
  );
};
export default ChangeStyles;
