const ServiceTitle = ({ title, choose }) => {
  return (
    <h3 className={choose ? "text-small" : "text-2xl font-semi-bold"}>
      {title}
    </h3>
  );
};
export default ServiceTitle;
