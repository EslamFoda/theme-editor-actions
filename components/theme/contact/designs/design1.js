import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";

const Design1 = () => {
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
    <div className="bg-white space-y-3 p-2 h-full">
      <div className="text-center ">
        <h1 className="text-small font-bold">Contact Us</h1>
        <p className="text-very-small">
          Our team is always available to assist you.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-1">
        {socialData.map((contact) => {
          return (
            <div id={contact.id} className="flex gap-1">
              <div className="min-w-[16px] h-4  bg-primaryBg flex justify-center items-center">
                <contact.icon size={7} className="text-primary" />
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
      <form className="space-y-1">
        <div className="border border-solid text-very-small p-[2px] rounded-sm">
          Name
        </div>
        <div className="border border-solid text-very-small p-[2px] rounded-sm">
          Email
        </div>
        <div className="border border-solid text-very-small p-[2px] rounded-sm">
          Address
        </div>

        <div className="text-center"></div>
      </form>
    </div>
  );
};

export default Design1;
