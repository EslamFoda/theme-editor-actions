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
import ChangeImgs from "../changeImgs";
import ChangeStyles from "../changeStyles";
import CloseEditor from "./common/closeEditor";
import useMainData from "../../hooks/useMainData";

const colors = [
  "Captain-Green",
  "Masr",
  "Egyption-Blue",
  "Custard-Mustard",
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
    selectSection,
    themeColor,
    themeFont,
    themeEffect,
  } = useMainData();

  const [navHeight, setNavHeight] = useState(0);


  const { designs } = useChooseDesign(compName);
 
  const containerWidth = useSelector((state: any) => state.mainWidth.width);

  const navEl = useRef(null);
  useEffect(() => {
    if (navEl.current.offsetHeight) {
      setNavHeight(navEl.current.offsetHeight);
    }
  });

  return (
    <div className={`theme-${themeColor} theme-light`}>
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
          <div className="bg-[#26313f] flex lg:flex-row md:flex-row flex-col px-5">
            <ActionBarDesc
              selectSection={selectSection}
              compName={compName}
              themeId={id}
            />
            <div className="lg:h-40 md:h-40 h-32 border-t mr-4 border-solid border-[#353f4b] flex items-center gap-4  scrollable overflow-auto w-full">
              {selectSection ? (
                <DesignFromSection
                  themeId={id}
                  designs={designs}
                  compName={compName}
                  comps={comps}
                  nextIndex={nextIndex}
                />
              ) : (
                <SelectSection
                  themeId={id}
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
            currentEffect={themeEffect}
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
