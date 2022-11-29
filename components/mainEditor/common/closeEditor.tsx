import { collection, doc, onSnapshot } from "firebase/firestore";
import { HiChevronUp } from "react-icons/hi";
import useCloseEditor from "../../../hooks/useCloseEditor";
import { db } from "../../../utlis/firebase";
import { useEffect, useState } from "react";
const CloseEditor = () => {
  
  const { handleCloseEditor } = useCloseEditor();
  return (
    <div
      onClick={handleCloseEditor}
      className="bg-[#353f4b] flex justify-center items-center h-7 w-8 absolute cursor-pointer -bottom-7 rounded-b-md right-7"
    >
      <HiChevronUp color="white" size={25} />
    </div>
  );
};

export default CloseEditor;
