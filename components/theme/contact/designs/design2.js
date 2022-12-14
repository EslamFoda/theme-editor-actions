import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";

const Design2 = () => {
  const socialData = [
    {
      icon: AiOutlineMail,
      id: 1,
      title: "email",
      subTitle: "info@business.com",
    },
    {
      icon: BsTelephone,
      id: 2,
      title: "Phone",
      subTitle: "1(800) - 374 - 990",
    },
    {
      icon: RiMapPin2Line,
      id: 3,
      title: "Address",
      subTitle: "301 W. 41st Street, Suite 501 Miami Beach, FL 33140",
    },
  ];
  return (
    <div className="bg-white space-y-3 p-4 h-full">
      <div className="grid  gap-y-1 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div>
          <div>
            <h1 className="text-small mb-2 font-bold">Contact Us</h1>
          </div>
          <div className="space-y-2">
            {socialData.map((contact) => {
              return (
                <div key={contact.id} className="flex gap-1">
                  <div className=" flex justify-center items-center">
                    <contact.icon size={7} />
                  </div>
                  <div>
                    <h3 className="text-small font-bold">{contact.title}</h3>
                    <span className="text-very-small block max-w-[60px]">
                      {contact.subTitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <form className="space-y-1">
          <div className="border border-solid text-very-small p-[2px] rounded-sm">
            Name
          </div>
          <div className="border border-solid text-very-small p-[2px] rounded-sm">
            Email
          </div>
          <div className="border border-solid text-very-small p-[2px] rounded-sm">
            phone
          </div>
          <div className="border border-solid text-very-small p-[2px] rounded-sm">
            Address
          </div>
          <div className="border border-solid text-very-small h-6 p-[2px] rounded-sm">
            Message
          </div>
          <button className="text-very-small bg-primary -mt-4 block text-white px-1 py-[2px] rounded-sm">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Design2;
