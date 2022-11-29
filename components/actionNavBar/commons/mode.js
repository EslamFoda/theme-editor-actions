const Mode = ({editSections}) => {
  <>
    {" "}
    {editSections ? (
      <span className="text-white font-bold">Edit Mode</span>
    ) : (
      <span className="text-white font-bold">Preview Mode</span>
    )}
  </>;
};

export default Mode;
