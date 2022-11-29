const ServiceSubTilte = ({ subTitle, choose }) => {
  return <p className={choose ? "text-very-small" : ""}>{subTitle}</p>;
};

export default ServiceSubTilte;
