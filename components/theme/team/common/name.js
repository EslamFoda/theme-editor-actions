const Name = ({ name, choose }) => {
  return <h2 className={`text-primary ${choose ? "text-small" :"text-2xl"} font-semibold`}>{name}</h2>;
};

export default Name;
