import EditItem from "../../editItem";
import EditImg from "../../edit/editImg";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../utlis/firebase";
import useMainData from "../../../hooks/useMainData";
export function EditPopover({
  children,
  index,
  comp,
  editImage = false,
  compIndex,
  themeData = undefined,
  comps = undefined,
}) {
  const { editSections } = useMainData();

  return (
    <>
      <HoverCard.Root openDelay={0} closeDelay={250}>
        <HoverCard.Trigger
          className={`${
            editSections
              ? `${
                  editImage
                    ? "hover:outline outline-offset-0 hover:outline-[3px] outline-[#23cba5]"
                    : "hover:outline outline-offset-8 hover:outline-[3px] outline-[#23cba5]"
                }`
              : ""
          } `}
          asChild
        >
          {children}
        </HoverCard.Trigger>
        <HoverCard.Portal>
          {editSections ? (
            <HoverCard.Content
              side={editImage ? "left" : "top"}
              avoidCollisions={editImage ? true : false}
              className={
                editImage ? "HoverCardContent_Img" : "HoverCardContent"
              }
              sideOffset={14}
            >
              {editImage ? (
                <EditImg
                  themeData={themeData}
                  index={index}
                  compIndex={compIndex}
                />
              ) : (
                <EditItem
                  comps={comps}
                  themeData={themeData}
                  comp={comp}
                  index={index}
                />
              )}
              <HoverCard.Arrow fill="#444f5b" className="HoverCardArrow" />
            </HoverCard.Content>
          ) : null}
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
}
