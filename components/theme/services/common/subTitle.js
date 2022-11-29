const SubTitle = ({ choose }) => {
  return (
    <p className={choose ? "text-very-small" : ""}>
      We offer top-notch services based on countless years of experience.
    </p>
  );
};

export default SubTitle;
