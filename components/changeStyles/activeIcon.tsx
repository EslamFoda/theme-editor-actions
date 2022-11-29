import { MdOutlineDone } from "react-icons/md";

const ActiveIcon = ({ styles, currentStyle }) => {
  return (
    <>
      {styles === currentStyle ? (
        <div className="absolute -top-2 -left-2 rounded-full p-1 bg-[#23cba5]">
          <MdOutlineDone color="white" size={18} />
        </div>
      ) : null}
    </>
  );
};

export default ActiveIcon;
