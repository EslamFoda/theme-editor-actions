
const Design1 = () => {
  return (
    <div className="bg-white h-full flex flex-col justify-center p-8">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 border-b border-solid py-2 border-b-[#96999d]">
        <p className="text-very-small">
          orem ipsum dolor sit amet, consectetuputate eros. Fusce imperdiet
          condimentum augue, ut ull
        </p>
        <ul className="flex  gap-2">
          <li>
            <span
              className="block text-very-small cursor-pointer font-bold text-black"
              aria-current="page"
            >
              Home
            </span>
          </li>
          <li>
            <span className="block text-very-small  cursor-pointer font-bold text-black">
              About
            </span>
          </li>
          <li>
            <span className="block text-very-small  cursor-pointer font-bold text-black">
              Services
            </span>
          </li>
          <li>
            <span className="block text-very-small cursor-pointer  font-bold text-black">
              Pricing
            </span>
          </li>
          <li>
            <span className="block text-very-small  cursor-pointer font-bold text-black">
              Contact
            </span>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2   py-2">
        <span className="text-small font-semibold text-gray-400">
          © All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Design1;
