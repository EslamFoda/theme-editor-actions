import React from "react";
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
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utlis/firebase";

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

const MainEditor = () => {
  // const { comps, setComps } = useContext(CompsContext);
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
    // containerWidth,
    // currentColor,
  } = useMainData();
  // const [themeId, setThemeId] = useState(null);
  // const [nextIndex, setNextIndex] = useState(null);
  // const [itemIndex, setItemIndex] = useState(null);
  // const [compName, setCompName] = useState(null);
  // const [editImg, setEditImg] = useState(null);
  // const [editFiles, setEditFiles] = useState(null);
  // const [fontEdit, setFontEdit] = useState(null);
  // const [editEffects, setEditEffects] = useState(null);
  // const [colorsEdit, setColorsEdit] = useState(null);
  // const [stylesEditing, setStylesEditing] = useState(null);
  // const [addSection, setAddSection] = useState(null);
  // const [editSections, setEditSections] = useState(null);
  const [currentColor, setCurrentColor] = useStickyState(
    colors[0],
    "theme-color"
  );
  const [currentEffect, setCurrentEffect] = useStickyState(
    effects[0],
    "theme-effects"
  );
  const [currentFont, setCurrentFont] = useStickyState(fonts[0], "theme-font");
  const [mode, setMode] = useStickyState(modes[0], "theme-mode");

  const dispatch = useDispatch();
  // const editSections = useSelector((state: any) => state.editSections.value);
  // const addSection = useSelector((state: any) => state.editSections.addSection);
  // const selectSection = useSelector(
  //   (state: any) => state.addSections.selectSection
  // );
  // const nextIndex = useSelector((state: any) => state.addSections.compIndex);
  // const openColors = useSelector((state: any) => state.colors.enableColors);
  // const compName = useSelector((state: any) => state.compName.compName);
  const { designs } = useChooseDesign(compName);
  const containerWidth = useSelector((state: any) => state.mainWidth.width);
  // const editImg = useSelector((state: any) => state.editImg.editImage);
  // const editFiles = useSelector((state: any) => state.files.editFiles);
  // const stylesEditing = useSelector(
  //   (state: any) => state.stylesEdit.stylesEditor
  // );
  // const fontEdit = useSelector((state: any) => state.stylesEdit.fontEdit);
  // const editEffects = useSelector((state: any) => state.stylesEdit.editEffects);

  // useEffect(() => {
  //   const data = window.localStorage.getItem("ALL_SECTIONS");
  //   if (data !== null) setComps([...JSON.parse(data)]);
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("ALL_SECTIONS", JSON.stringify(comps));
  // }, [comps]);

  // const [comps, setComps] = useState(null);
  // const [themeId, setThemeId] = useState(null);
  // useEffect(() => {
  //   onSnapshot(collection(db, "themes"), (snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       setThemeId(doc.id);
  //       setNextIndex(doc.data().nextIndex);
  //       setComps(doc.data().allSections);
  //       setItemIndex(doc.data().itemIndex);
  //       setCompName(doc.data().compName);
  //       setEditImg(doc.data().editImg);
  //       setEditFiles(doc.data().editFiles);
  //       setFontEdit(doc.data().fontEdit);
  //       setEditEffects(doc.data().editEffects);
  //       setColorsEdit(doc.data().colorsEdit);
  //       setStylesEditing(doc.data().stylesEditing);
  //       setAddSection(doc.data().addSection);
  //       setEditSections(doc.data().editSections);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    if (themeId) {
      const docRef = doc(db, "themes", themeId);
      setDoc(
        docRef,
        {
          themeColor: currentColor,
          themeFont: currentFont,
        },
        {
          merge: true,
        }
      ).then(() => console.log("Document updated"));
    }
  }, [currentColor, currentFont, themeId]);
  return (
    <div
      className={[themeColor && `theme-${themeColor}`, mode && `theme-${mode}`]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="sticky top-0 right-0 z-50">
        {themeId && (
          <ActionNavBar
            editSections={editSections}
            fontEdit={fontEdit}
            editEffects={editEffects}
            colorsEdit={colorsEdit}
            editFiles={editFiles}
            themeId={themeId}
          />
        )}
        {editSections && compName && !addSection && (
          <SelectDesign
            themeId={themeId}
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
              themeId={themeId}
            />
            <div className="h-40 flex items-center gap-4  scrollable overflow-auto w-full">
              {selectSection ? (
                <DesignFromSection
                  themeId={themeId}
                  designs={designs}
                  dispatch={dispatch}
                  // setComps={setComps}
                  compName={compName}
                  comps={comps}
                  nextIndex={nextIndex}
                />
              ) : (
                <SelectSection
                  themeId={themeId}
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
            themeId={themeId}
            currentEffect={currentEffect}
            setCurrentEffect={setCurrentEffect}
            editEffects={editEffects}
            effects={effects}
            fonts={fonts}
            currentFont={currentFont}
            setCurrentFont={setCurrentFont}
            fontEdit={fontEdit}
            openColors={colorsEdit}
            mode={mode}
            colors={colors}
            setCurrentColor={setCurrentColor}
            currentColor={currentColor}
          />
        ) : null}
        {editImg || editFiles ? (
          <ChangeImgs
            editFiles={editFiles}
            itemIndex={itemIndex}
            compIndex={nextIndex}
            comps={comps}
            themeId={themeId}
          />
        ) : null}
      </div>

      <iframe
        style={{
          width: containerWidth,
          margin: "0px auto",
          transition: "width 0.2s ease 0s",
        }}
        className="h-[90vh]"
        src="https://theme-editing.vercel.app/"
      />
    </div>
  );
};

export default MainEditor;
