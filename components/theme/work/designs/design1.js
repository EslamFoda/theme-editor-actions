const Design1 = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col gap-1 justify-center h-full items-center py-4">
        <h1 className="text-[10px] font-semibold">
          Get ready for a unique experience
        </h1>
        <p className="text-very-small">
          Get ready for a unique experience! Get ready for a unique experience!
        </p>
        <div className="flex justify-center mt-1 items-center gap-1">
          <button className="bg-primary text-white rounded-sm p-1 px-2 text-very-small">
            Start Now
          </button>
          <button className="p-1 text-very-small border border-solid px-2 text-primary rounded-sm border-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Design1;
