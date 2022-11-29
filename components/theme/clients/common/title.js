const Title = ({ choose, title }) => {
  return (
    <h1 className={choose ? "text-small" : "text-2xl font-semibold"}>
      {title}
    </h1>
  );
};

export default Title;
