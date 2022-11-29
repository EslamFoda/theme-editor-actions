import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../utlis/firebase";
const useMainData = () => {
  const [comps, setComps] = useState(null);
  const [themeId, setThemeId] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);
  const [itemIndex, setItemIndex] = useState(null);
  const [compName, setCompName] = useState(null);
  const [editImg, setEditImg] = useState(null);
  const [editFiles, setEditFiles] = useState(null);
  const [fontEdit, setFontEdit] = useState(null);
  const [editEffects, setEditEffects] = useState(null);
  const [colorsEdit, setColorsEdit] = useState(null);
  const [stylesEditing, setStylesEditing] = useState(null);
  const [addSection, setAddSection] = useState(null);
  const [editSections, setEditSections] = useState(null);
  const [selectSection, setSelectSection] = useState(null);
  const [themeColor, setThemeColor] = useState(null);
  const [themeFont, setThemeFont] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);

  useEffect(
    () =>
      onSnapshot(collection(db, "themes"), (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setThemeId(doc.id);
          setNextIndex(doc.data().nextIndex);
          setComps(doc.data().allSections);
          setItemIndex(doc.data().itemIndex);
          setCompName(doc.data().compName);
          setEditImg(doc.data().editImg);
          setEditFiles(doc.data().editFiles);
          setFontEdit(doc.data().fontEdit);
          setEditEffects(doc.data().editEffects);
          setColorsEdit(doc.data().colorsEdit);
          setStylesEditing(doc.data().stylesEditing);
          setAddSection(doc.data().addSection);
          setEditSections(doc.data().editSections);
          setSelectSection(doc.data().selectSection);
          setThemeColor(doc.data().themeColor);
          setThemeFont(doc.data().themeFont);
          setContainerWidth(doc.data().containerWidth);
        });
      }),
    []
  );

  return {
    comps,
    themeId,
    nextIndex,
    itemIndex,
    compName,
    editImg,
    editFiles,
    fontEdit,
    editEffects,
    colorsEdit,
    stylesEditing,
    editSections,
    addSection,
    selectSection,
    themeColor,
    themeFont,
    containerWidth,
  };
};

export default useMainData;
