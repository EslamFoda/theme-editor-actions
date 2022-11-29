import { useDispatch } from "react-redux";
import { closeColors } from "../features/colors";
import {
  editEffectsOff,
  fontEditOff,
  stylesEditorOff,
} from "../features/stylesEditing";
import { useState, useEffect } from "react";
import { addSectionTurnOff } from "../features/edit-sections";
import { editImgOff } from "../features/edit-image";
import { filesOff } from "../features/my-files";
import { selectCompName } from "../features/comp-name";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../utlis/firebase";
const useCloseEditor = () => {
  const [themeId, setThemeId] = useState(null);

  useEffect(() => {
    onSnapshot(collection(db, "themes"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setThemeId(doc.id);
      });
    });
  }, []);
  const dispatch = useDispatch();

  const handleCloseEditor = async () => {
    const themeData = doc(db, "themes", themeId);
    await updateDoc(themeData, {
      compName: "",
      editImg: false,
      editFiles: false,
      colorsEdit: false,
      fontEdit: false,
      addSection: false,
      editEffects: false,
      stylesEditing: false,
    });
    // dispatch(closeColors());
    // dispatch(fontEditOff());
    // dispatch(selectCompName(""));
    // dispatch(addSectionTurnOff());
    // dispatch(editImgOff());
    // dispatch(filesOff());
    // dispatch(editEffectsOff());
    // dispatch(stylesEditorOff());
  };

  return { handleCloseEditor };
};

export default useCloseEditor;
