import React from "react";
import Container from "../../../ui/container";
import { FaAd, FaUsers, FaBriefcase, FaAsterisk } from "react-icons/fa";

const Design1 = () => {
  const data = [
    {
      icon: <FaAd className="text-secondary" size={5} />,
      title: "Professional Support",
      subTitle:
        "Our team works diligently to ensure that all your questions are answered and your needs met.",
      id: 1,
      button: "Read More",
    },
    {
      icon: <FaUsers className="text-secondary" size={5} />,
      title: "Qualified Team",
      subTitle:
        "From designers to developers to writers, our team is equipped with a diverse set of skills.",
      id: 2,
      button: "Read More",
    },
    {
      icon: <FaBriefcase className="text-secondary" size={5} />,
      title: "High Quality Work",
      subTitle:
        "All our work is executed with the highest degree of efficiency.",
      id: 3,
      button: "Read More",
    },
    {
      icon: <FaAsterisk className="text-secondary" size={5} />,
      title: "Detail-oriented approach",
      subTitle:
        "We focus on every aspect of our clients’ needs to leave nothing to chance.",
      id: 4,
      button: "Read More",
    },
  ];

  return (
    <>
      <div className="bg-white w-full h-full">
        <Container className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2  py-1  gap-1">
            {data.map((card) => {
              return (
                <div
                  key={card.id}
                  className="p-1 flex flex-col space-y-1 text-center items-center  "
                >
                  <div>{card.icon}</div>
                  <h3 className="text-small font-semibold">{card.title}</h3>
                  <p className="text-very-small">{card.subTitle}</p>
                  <button className="bg-primary text-white text-very-small p-[3px]">
                    {card.button}
                  </button>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design1;
