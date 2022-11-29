import { updateDoc } from "firebase/firestore";
import { FaEdit, FaEye } from "react-icons/fa";
import { closeColors } from "../../../features/colors";
import { selectCompName } from "../../../features/comp-name";
import { editImgOff } from "../../../features/edit-image";
import { addSectionTurnOff, toggleEdit } from "../../../features/edit-sections";
import { filesOff } from "../../../features/my-files";

const PreviewEdit = ({ editSections, dispatch,themeData }) => {
  return (
    <div
      className=" mx-4 justify-self-end cursor-pointer"
      onClick={async() => {
        await updateDoc(themeData, {
          editSections:!editSections,
          compName: "",
          editFiles: false,
          editImg: false,
          colorsEdit: false,
          fontEdit: false,
          editEffects: false,
          stylesEditing: false,
          addSection: false,
        });
        // dispatch(toggleEdit());
        // dispatch(addSectionTurnOff());
        // dispatch(selectCompName(""));
        // dispatch(closeColors());
        // dispatch(filesOff());
        // dispatch(editImgOff());
      }}
    >
      {editSections ? (
        <div className="flex text-[#98A2B3] hover:text-white items-center gap-3">
          <FaEye size={16} />
          <span>preview</span>
        </div>
      ) : (
        <div className="flex text-[#98A2B3] hover:text-white items-center gap-3">
          <FaEdit size={16} />
          <span>edit</span>
        </div>
      )}
    </div>
  );
};

export default PreviewEdit;
