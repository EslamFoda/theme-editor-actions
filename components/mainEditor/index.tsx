import React, { useRef, useState } from "react";
import { useEffect } from "react";
import ActionNavBar from "../actionNavBar";
import { useSelector, useDispatch } from "react-redux";
import useChooseDesign from "../../hooks/useChooseDesign";
import SelectDesign from "./common/selectDesign";
import SelectSection from "./common/selectSection";
import DesignFromSection from "./common/DesignFromSection";
import { sectionsImgs } from "../../constant";
import ActionBarDesc from "./common/actionBarDesc";
import { useStickyState } from "../../hooks/useStickyState";
import ChangeImgs from "../changeImgs";
import ChangeStyles from "../changeStyles";
import CloseEditor from "./common/closeEditor";
import useMainData from "../../hooks/useMainData";

const colors = [
  "Captain-Green",
  "Masr",
  "Egyption-Blue",
  "Custard-With-Mustard",
  "Ron-Burgundy",
  "Baby-Blue",
  "Black-Panther",
  "Blue-Sky",
  "Barbie-Girl",
  "Juice-Box",
  "Rose-Flower",
  "Teal",
  "Emerald",
  "Indigo",
  "Violet",
  "Gray",
  "Lime",
];

const fonts = [
  "sans",
  "Poppins",
  "Tillana",
  "Montserrat",
  "rubek",
  "hind",
  "Saira",
  "Roboto",
  "Amatic",
  "Bangers",
  "Kdam",
  "Krub",
  "Lato",
  "Lora",
  "Nerko",
  "Roboto",
  "Roboto-Mono",
  "Ropa-Sans",
  "Russo-One",
  "Saira-Condensed",
  "Secular-One",
];

const effects = ["no-animation", "fade-up", "zoom-in-up", "flip-up"];

const modes = ["light", "dark"];

const MainEditor = ({ id }) => {
  const {
    addSection,
    colorsEdit,
    compName,
    comps,
    editEffects,
    editFiles,
    editImg,
    editSections,
    fontEdit,
    itemIndex,
    nextIndex,
    stylesEditing,
    themeId,
    selectSection,
    themeColor,
    themeFont,
  } = useMainData();

  const [currentEffect, setCurrentEffect] = useStickyState(
    effects[0],
    "theme-effects"
  );
  const [mode, setMode] = useStickyState(modes[0], "theme-mode");
  const [navHeight, setNavHeight] = useState(0);

  const dispatch = useDispatch();

  const { designs } = useChooseDesign(compName);
  const containerWidth = useSelector((state: any) => state.mainWidth.width);

  const navEl = useRef(null);
  useEffect(() => {
    if (navEl.current.offsetHeight) {
      setNavHeight(navEl.current.offsetHeight);
    }
  });

  return (
    <div>
      <div ref={navEl} className="sticky top-0 right-0 z-50">
        {id && (
          <ActionNavBar
            editSections={editSections}
            fontEdit={fontEdit}
            editEffects={editEffects}
            colorsEdit={colorsEdit}
            editFiles={editFiles}
            themeId={id}
          />
        )}
        {editSections && compName && !addSection && (
          <SelectDesign
            themeId={id}
            comps={comps}
            designs={designs}
            nextIndex={nextIndex}
            // setComps={setComps}
          />
        )}
        {addSection && editSections && (
          <div className="bg-[#26313f] flex px-5">
            <ActionBarDesc
              selectSection={selectSection}
              dispatch={dispatch}
              compName={compName}
              themeId={id}
            />
            <div className="h-40 flex items-center gap-4  scrollable overflow-auto w-full">
              {selectSection ? (
                <DesignFromSection
                  themeId={id}
                  designs={designs}
                  // setComps={setComps}
                  compName={compName}
                  comps={comps}
                  nextIndex={nextIndex}
                />
              ) : (
                <SelectSection
                  themeId={id}
                  dispatch={dispatch}
                  sectionsImgs={sectionsImgs}
                />
              )}
            </div>
            <CloseEditor />
          </div>
        )}
        {stylesEditing && !addSection && editSections ? (
          <ChangeStyles
            themeId={id}
            currentEffect={currentEffect}
            setCurrentEffect={setCurrentEffect}
            editEffects={editEffects}
            effects={effects}
            fonts={fonts}
            currentFont={themeFont}
            fontEdit={fontEdit}
            openColors={colorsEdit}
            colors={colors}
            currentColor={themeColor}
          />
        ) : null}
        {editImg || editFiles ? (
          <ChangeImgs
            editFiles={editFiles}
            itemIndex={itemIndex}
            compIndex={nextIndex}
            comps={comps}
            themeId={id}
          />
        ) : null}
      </div>

      <div
        style={{
          maxWidth: containerWidth,
          transition: "all 0.3s ease 0s",
          margin: "0px auto",
        }}
      >
        <iframe
          style={{
            width: "100%",
            height: `calc(100vh - ${navHeight}px)`,
          }}
          src={`https://theme-editing.vercel.app/${id}`}
        />
      </div>
    </div>
  );
};

export default MainEditor;
