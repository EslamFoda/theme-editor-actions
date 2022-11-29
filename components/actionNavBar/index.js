import { useSelector, useDispatch } from "react-redux";
import { addSectionTurnOff, toggleEdit } from "../../features/edit-sections";
import { changeDevice, changeWidth } from "../../features/main-width";
import { closeColors, toggleColors } from "../../features/colors";
import { filesOn, filesOff, toggleEditFile } from "../../features/my-files";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { selectCompName } from "../../features/comp-name";
import { editImgOff } from "../../features/edit-image";
import PreviewEdit from "./commons/previewEdit";
import { IoImageOutline } from "react-icons/io5";
import {
  editEffectsOff,
  fontEditOff,
  stylesEditorOff,
} from "../../features/stylesEditing";
import LookAndFeel from "./commons/lookAndFeel";
import ChangeDevices from "./commons/changeDevices";
import Mode from "./commons/mode";
import * as Toggle from "@radix-ui/react-toggle";
import { db } from "../../utlis/firebase";
import { doc, updateDoc } from "firebase/firestore";
const ActionNavBar = ({
  themeId,
  editFiles,
  fontEdit,
  editEffects,
  colorsEdit,
  editSections
}) => {
  const themeData = doc(db, "themes", themeId);
  // const editSections = useSelector((state) => state.editSections.value);
  const device = useSelector((state) => state.mainWidth.device);
  // const editFiles = useSelector((state) => state.files.editFiles);
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <div className="bg-[#353f4b]   min-h-[65px] py-2 grid grid-cols-3 items-center">
        <div className="justify-self-start px-2  flex gap-3 items-center">
          <PreviewEdit themeData={themeData} dispatch={dispatch} editSections={editSections} />

          <LookAndFeel
            themeData={themeData}
            dispatch={dispatch}
            editSections={editSections}
            fontEdit={fontEdit}
            editEffects={editEffects}
            colorsEdit={colorsEdit}
          />
          {editSections ? (
            <Toggle.Root
              pressed={editFiles}
              className="Toggle"
              aria-label="Toggle files"
            >
              <div
                className="text-[#98A2B3] rounded-sm  p-1 bg-[#1f2b39]  cursor-pointer"
                onClick={async () => {
                  await updateDoc(themeData, {
                    editFiles: !editFiles,
                    compName: "",
                    editImg: false,
                    fontEdit: false,
                    editEffects: false,
                    colorsEdit: false,
                    stylesEditing: false,
                    addSection: false,
                  });
                  // dispatch(toggleEditFile());
                  // dispatch(selectCompName(""));
                  // dispatch(addSectionTurnOff());
                  // dispatch(editImgOff());
                  // dispatch(closeColors());
                  // dispatch(editEffectsOff());
                  // dispatch(fontEditOff());
                  // dispatch(stylesEditorOff());
                }}
              >
                <div className="flex gap-2 rounded-sm bg-[#283340] cursor-pointer hover:bg-[hsla(0,0%,100%,.7)] hover:text-[#0a0a0a] p-2">
                  <IoImageOutline size={25} />
                  <span className="font-semibold">Files</span>
                </div>
              </div>
            </Toggle.Root>
          ) : null}
        </div>
        <div className="self-center justify-self-center">
          <ChangeDevices themeData={themeData} dispatch={dispatch} device={device} />
        </div>
        <div className="px-4 justify-self-end">
          <Mode editSections={editSections} />
        </div>
      </div>
    </>
  );
};

export default ActionNavBar;
