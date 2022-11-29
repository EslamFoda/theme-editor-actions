import { RiImageAddLine } from "react-icons/ri";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Toast from "@radix-ui/react-toast";
import { MdError, MdClose } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";
import EmptyFiles from "./common/emptyFiles";
import CloseEditor from "../mainEditor/common/closeEditor";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../utlis/firebase";
const ChangeImgs = ({
  comps,
  themeId,
  itemIndex,
  compIndex,
  editFiles,
}) => {
  const [storedImgs, setStoredImgs] = useState([]);
  const themeData = doc(db, "themes", themeId);
  const [error, setError] = useState(false);
  // const compIndex = useSelector((state: any) => state.editImg.compIndex);
  // const itemIndex = useSelector((state: any) => state.editImg.itemIndex);
  // const editFiles = useSelector((state: any) => state.files.editFiles);

  const bgSstyle = {
    backgroundImage:
      "linear-gradient(45deg,#ccc 25%,transparent 0,transparent 75%,#ccc 0,#ccc),linear-gradient(45deg,#ccc 25%,#fff 0,#fff 75%,#ccc 0,#ccc)",
    backgroundPosition: "0 0,5px 5px",
    backgroundSize: "10px 10px",
  };
  const backgroundInput = useRef(null);
  const type = ["image/jpeg", "image/png"];
  const changeHandler = async (e) => {
    setError(false);
    const selected = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {});

    reader.readAsDataURL(e.target.files[0]);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "my-upload");
    if (selected && type.includes(selected.type)) {
      const data = await fetch(
        "https://api.cloudinary.com/v1_1/dxrdyke2n/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
      setStoredImgs((oldArray) => [...oldArray, data.secure_url]);
      itemIndex || itemIndex === 0
        ? (comps[compIndex].compData.items[itemIndex].pic = data.secure_url)
        : (comps[compIndex].compData.pic = data.secure_url);

      // setComps([...comps]);
      await updateDoc(themeData, {
        allSections: [...comps],
      });
    } else {
      setError(true);
    }
  };

  const onButtonClick = () => {
    backgroundInput.current.click();
  };
  useEffect(() => {
    const data = window.localStorage.getItem("ALL_IMGS");
    if (data !== null) setStoredImgs([...JSON.parse(data)]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ALL_IMGS", JSON.stringify(storedImgs));
  }, [storedImgs]);
  return (
    <>
      <Toast.Provider duration={3000} swipeDirection="right">
        <Toast.Root className="ToastRoot" open={error} onOpenChange={setError}>
          <Toast.Title className="ToastTitle">
            {" "}
            <MdError className="text-red-500 inline-block" size={30} /> Not
            Supported File
          </Toast.Title>
          <Toast.Description className="ToastDescription">
            Please Upload Image
          </Toast.Description>
          <Toast.Action
            className="ToastAction"
            asChild
            altText="Goto schedule to undo"
          >
            <MdClose size={30} />
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
      <div className="bg-[#26313f] relative flex px-5">
        {editFiles ? null : (
          <div className="w-80 space-y-2 pr-6   py-4 border-r mr-4 border-solid border-[#353f4b] h-[164px]">
            <div
              onClick={onButtonClick}
              className="h-full cursor-pointer group w-full rounded-md border border-solid flex items-center flex-col justify-center border-gray-500"
            >
              <RiImageAddLine
                className="text-[#868c96] group-hover:text-white"
                size={35}
              />
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                ref={backgroundInput}
                onChange={changeHandler}
              />
              <span className="text-[#868c96] text-xl group-hover:text-white">
                upload image
              </span>
            </div>
          </div>
        )}
        <div className="h-40 flex items-center gap-4 p-4  overflow-auto  w-full">
          {storedImgs.length ? (
            storedImgs.map((img, index) => {
              return (
                <div
                  onClick={async () => {
                    if ((!editFiles && itemIndex) || itemIndex === 0) {
                      comps[compIndex].compData.items[itemIndex].pic = img;

                      await updateDoc(themeData, {
                        allSections: [...comps],
                      });
                    } else if (!editFiles && !itemIndex) {
                      comps[compIndex].compData.pic = img;
                      await updateDoc(themeData, {
                        allSections: [...comps],
                      });
                    }
                  }}
                  style={bgSstyle}
                  key={index}
                  className="h-full min-w-[220px] group relative"
                >
                  <Image
                    src={img}
                    layout="fill"
                    objectFit="contain"
                    className="absolute"
                    alt='image file'
                  />
                  {editFiles ? (
                    <div
                      onClick={() => {
                        const filterdImgs = storedImgs.filter(
                          (_, i) => i !== index
                        );
                        setStoredImgs([...filterdImgs]);
                      }}
                      className="absolute hidden -top-3 -right-3 bg-white cursor-pointer h-8 group-hover:flex justify-center items-center w-8 rounded-full"
                    >
                      <TfiTrash />
                    </div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <EmptyFiles />
          )}
        </div>
        <CloseEditor />
      </div>
    </>
  );
};

export default ChangeImgs;
