import { HiOutlineSparkles } from "react-icons/hi";
import { MdOutlineInvertColors } from "react-icons/md";
import { BsFonts } from "react-icons/bs";
import MyTooltip from "../../ui/tooltip";
import { useState, useEffect } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { updateDoc } from "firebase/firestore";
const LookAndFeel = ({
  editSections,
  themeData,
  fontEdit,
  editEffects,
  colorsEdit,
}) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    if (!fontEdit && !editEffects && !colorsEdit) {
      setValue("");
    }
  }, [fontEdit, editEffects, colorsEdit]);
  const btns = [
    {
      title: "Effects",
      isOpen: editEffects,
      id: 1,
      Icon: HiOutlineSparkles,
      action: async () => {
        await updateDoc(themeData, {
          editFiles: false,
          compName: "",
          editImg: false,
          colorsEdit: false,
          fontEdit: false,
          editEffects: true,
          stylesEditing: true,
          addSection: false,
        });

        if (editEffects) {
          await updateDoc(themeData, {
            editEffects: false,
            stylesEditing: false,
          });
        } else {
          await updateDoc(themeData, {
            stylesEditing: true,
          });
        }
      },
    },
    {
      title: "Fonts",
      id: 2,
      isOpen: fontEdit,
      Icon: BsFonts,
      action: async () => {
        await updateDoc(themeData, {
          editFiles: false,
          compName: "",
          editImg: false,
          colorsEdit: false,
          fontEdit: true,
          editEffects: false,
          stylesEditing: true,
          addSection: false,
        });

        if (fontEdit) {
          await updateDoc(themeData, {
            fontEdit: false,
            stylesEditing: false,
          });
        } else {
          await updateDoc(themeData, {
            stylesEditing: true,
          });
        }
      },
    },
    {
      title: "Colors",
      id: 3,
      isOpen: colorsEdit,
      Icon: MdOutlineInvertColors,
      action: async () => {
        await updateDoc(themeData, {
          editFiles: false,
          compName: "",
          editImg: false,
          colorsEdit: true,
          fontEdit: false,
          editEffects: false,
          stylesEditing: true,
          addSection: false,
        });

        if (colorsEdit) {
          await updateDoc(themeData, {
            colorsEdit: false,
            stylesEditing: false,
          });
        } else {
          await updateDoc(themeData, {
            stylesEditing: true,
          });
        }
      },
    },
  ];
  return (
    <ToggleGroup.Root
      className="ToggleGroup"
      value={value}
      type="single"
      onValueChange={(val) => {
        setValue(val);
      }}
    >
      {editSections ? (
        <div className="text-[#98A2B3] rounded-sm p-1 gap-1 bg-[#1f2b39] flex">
          {btns.map((btn) => {
            return (
              <ToggleGroup.Item
                className="ToggleGroupLookAndFeel"
                aria-label={btn.title}
                key={btn.id}
                value={btn.title}
              >
                <div>
                  <MyTooltip content={btn.title}>
                    <div
                      onClick={btn.action}
                      className="bg-[#283340] lookAndFeelContainer rounded-sm cursor-pointer hover:bg-[hsla(0,0%,100%,.7)] hover:text-[#0a0a0a] p-2"
                    >
                      <btn.Icon size={25} />
                    </div>
                  </MyTooltip>
                </div>
              </ToggleGroup.Item>
            );
          })}
        </div>
      ) : null}
    </ToggleGroup.Root>
  );
};

export default LookAndFeel;
