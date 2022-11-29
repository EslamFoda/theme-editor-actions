interface Props {
  title: string;
  subTitle: string;
}

const TextBar = ({ title, subTitle }: Props) => {
  return (
    <div className="w-72 space-y-2  py-4 border-r border-solid border-[#353f4b] h-full">
      <h2 className="text-2xl  font-bold text-white">{title}</h2>
      <h5 className="text-white">{subTitle}</h5>
    </div>
  );
};

export default TextBar;
