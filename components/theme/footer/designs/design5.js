const Design5 = () => {
  return (
    <div className="bg-white h-full text-center flex justify-center flex-col  p-8">
      <ul className="flex justify-start pt-1  gap-2">
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
  );
};

export default Design5;
