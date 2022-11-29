const SubTitle = ({ choose,subTitle }) => {
  return (
    <p className={choose ? "text-very-small" : ""}>
      {subTitle}
    </p>
  );
};

export default SubTitle;
