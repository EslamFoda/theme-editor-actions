const About = ({ about, choose }) => {
  return (
    <p className={choose ? "text-very-small max-w-[50px]" : "text-sm"}>
      {about}
    </p>
  );
};
export default About;
