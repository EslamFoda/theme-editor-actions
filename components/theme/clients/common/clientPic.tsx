import Image from "next/image";
import { EditPopover } from "../../../ui/popover/EditPopover";
import { FC } from "react";
import cn from "clsx";
import useMainData from "../../../../hooks/useMainData";

interface Props {
  design: "design1" | "design4" | "design5";
  compIndex: number;
  index: number;
  comp: {};
  client: {
    pic: string;
  };
  themeData: any;
}

const ClientPic: FC<Props> = ({
  compIndex,
  index,
  comp,
  client,
  design,
  themeData,
}) => {
  const rootClassName = cn("relative", {
    "h-20 w-44": design === "design1",
    "h-20 w-40": design === "design4",
    "h-16 w-24": design === "design5",
  });
  const { comps } = useMainData();
  return (
    <EditPopover
      comps={comps}
      themeData={themeData}
      compIndex={compIndex}
      comp={comp}
      index={index}
      editImage
    >
      <div className={rootClassName}>
        <Image
          src={client.pic}
          layout="fill"
          objectFit="contain"
          className="absolute"
          alt="client picture"
        />
      </div>
    </EditPopover>
  );
};

export default ClientPic;
