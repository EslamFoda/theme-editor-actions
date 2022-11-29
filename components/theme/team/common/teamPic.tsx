import { EditPopover } from "../../../ui/popover/EditPopover";
import { FC } from "react";
import cn from "clsx";

interface Props {
  design: "design1" | "design2" | "design3" | "design4" | "design5";
  compIndex: number;
  comp: {};
  index: number;
  pic: string;
  themeData: any;
  comps: any;
}

const TeamPic: FC<Props> = ({
  compIndex,
  comp,
  index,
  pic,
  design,
  themeData,
  comps,
}) => {
  const rootClassName = cn("bg-no-repeat bg-center bg-cover", {
    " overflow-hidden m-auto h-28 w-28 rounded-full": design === "design1",
    "h-72 w-full": design === "design2",
    " overflow-hidden  h-24 w-24 rounded-full": design === "design3",
    "overflow-hidden m-auto h-32 w-32 rounded-full": design === "design4",
    "overflow-hidden m-auto h-44 w-full": design === "design5",
  });
  return (
    <EditPopover
      comps={comps}
      themeData={themeData}
      compIndex={compIndex}
      comp={comp}
      index={index}
      editImage
    >
      <div
        style={{ backgroundImage: `url(${pic})` }}
        className={rootClassName}
      ></div>
    </EditPopover>
  );
};

export default TeamPic;
