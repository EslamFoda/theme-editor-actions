import React from "react";

interface Props {
  comps: [] | any;
  nextIndex: number;
  i: number;
  Design: any;
  handle: (i: number) => void;
  select: boolean;
}

const Designs: React.FC<Props> = ({
  comps,
  nextIndex,
  i,
  Design,
  handle,
  select = false,
}) => {
  return (
    <div
      className={`h-32 relative rounded-md overflow-hidden  cursor-pointer min-w-[288px] ${
        // @ts-ignore
        select && comps[nextIndex].designNum === i + 1
          ? "border-[#23cba5] border-4 border-solid  bg-white "
          : "bg-white border-4 border-[#26313f]"
      }`}
      onClick={() => {
        handle(i);
      }}
    >
      {<Design data={comps[nextIndex].compData} choose={true} />}
    </div>
  );
};
export default Designs;
