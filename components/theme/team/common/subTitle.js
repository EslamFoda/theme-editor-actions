const SubTitle = ({ choose }) => {
  return (
    <p className={choose ? "text-very-small" : ""}>
      We’re led by a team who is always thinking, always creating, and always pushing forward.
    </p>
  );
};

export default SubTitle;
