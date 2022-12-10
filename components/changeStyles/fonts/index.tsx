import AllFonts from "./allFonts";

const Fonts = ({ fonts, docRef, currentFont }) => {
  return (
    <>
      {fonts?.map((font, i) => {
        return (
          <AllFonts
            docRef={docRef}
            key={i}
            fonts={fonts}
            font={font}
            currentFont={currentFont}
            i={i}
          />
        );
      })}
    </>
  );
};

export default Fonts;
