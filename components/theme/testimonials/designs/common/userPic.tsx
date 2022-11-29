import cn from "clsx";
import { EditPopover } from "../../../../ui/popover/EditPopover";
import { FC } from "react";
interface Props {
  design: "design1" | "design2" | "design3" | "design4" | "design5";
  compIndex: number;
  index: number;
  testi: any;
  comp: any;
  themeData: any;
}

const UserPic: FC<Props> = ({
  design,
  compIndex,
  comp,
  index,
  testi,
  themeData,
}) => {
  const rootClassName = cn("", {
    "w-20 h-20 bg-no-reapeat bg-cover bg-center bg-white shadow-md absolute -top-10 rounded-full left-8 border-4 border-[#dfe0e1]":
      design === "design1",
    "w-20 h-20 bg-no-reapeat bg-cover bg-center bg-white shadow-md absolute -bottom-10 rounded-full left-4 border-4 border-[#dfe0e1]":
      design === "design2",
    "w-20 h-20 bg-no-reapeat bg-cover bg-center bg-white shadow-md rounded-full  border-4 border-[#dfe0e1]":
      design === "design3",
    "w-14 h-14 bg-no-reapeat bg-cover bg-center   rounded-full":
      design === "design4",
  });
  return (
    <EditPopover
      themeData={themeData}
      compIndex={compIndex}
      comp={comp}
      index={index}
      editImage
    >
      <div
        style={{ backgroundImage: `url(${testi.pic})` }}
        className={rootClassName}
      ></div>
    </EditPopover>
  );
};

export default UserPic;
