import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utlis/firebase";
import useMainData from "./useMainData";
const useCloseEditor = () => {
  const { themeId } = useMainData();

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
      bgImg: false,
    });
  };

  return { handleCloseEditor };
};

export default useCloseEditor;
