import { updateDoc } from "firebase/firestore";
import { FaEdit, FaEye } from "react-icons/fa";

const PreviewEdit = ({ editSections, themeData }) => {
  return (
    <div
      className=" lg:mx-4 md:mx-4 mx-2 justify-self-end cursor-pointer"
      onClick={async () => {
        await updateDoc(themeData, {
          editSections: !editSections,
          compName: "",
          editFiles: false,
          editImg: false,
          colorsEdit: false,
          fontEdit: false,
          editEffects: false,
          stylesEditing: false,
          addSection: false,
        });
      }}
    >
      {editSections ? (
        <div className="flex text-[#98A2B3] hover:text-white items-center gap-3">
          <FaEye size={16} />
          <span className="hidden lg:block md:block">preview</span>
        </div>
      ) : (
        <div className="flex text-[#98A2B3] hover:text-white items-center gap-3">
          <FaEdit size={16} />
          <span className="hidden lg:block md:block">edit</span>
        </div>
      )}
    </div>
  );
};

export default PreviewEdit;
