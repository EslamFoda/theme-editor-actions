const Title = ({ choose }) => {
  return <h1 className={choose ? "text-small" :"text-2xl font-semibold"}>Our Team</h1>;
};

export default Title;
