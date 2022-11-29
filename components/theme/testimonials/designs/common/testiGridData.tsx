import { testimonialsData } from "../../../../../constant";
const TestiGridData = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-1 gap-y-1">
      {testimonialsData?.map((client) => (
        <div key={client.id}>
          <div className="w-full bg-white flex flex-col gap-1 self-start  p-2 pt-3  shadow-md relative">
            <div
              style={{ backgroundImage: `url(${client.pic})` }}
              className="w-4 h-4 bg-no-reapeat bg-cover bg-center bg-white shadow-md absolute -top-2 rounded-full left-2 border-1 border-[#dfe0e1]"
            ></div>
            <h1 className="text-small">{client.name}</h1>
            <p className="text-very-small font-semibold">{client.position}</p>
            <p className="text-very-small ">{client.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestiGridData;
