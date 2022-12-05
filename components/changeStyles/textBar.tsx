interface Props {
  title: string;
  subTitle: string;
}

const TextBar = ({ title, subTitle }: Props) => {
  return (
    <div className="lg:w-72 md:w-72 w-40 space-y-2 pr-1  py-4 border-r border-solid border-[#353f4b] h-full">
      <h2 className="lg:text-2xl md:text-2xl text-sm  font-bold text-white">
        {title}
      </h2>
      <h5 className="text-xs lg:text-base md:text-base text-white">
        {subTitle}
      </h5>
    </div>
  );
};

export default TextBar;
