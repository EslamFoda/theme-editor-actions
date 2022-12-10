import ColorPalettes from "./colorPallates";


const Colors = ({ colors, docRef, currentColor }) => {
  return (
    <>
      {colors?.map((color: string, i: number) => {
        return (
          <ColorPalettes
            docRef={docRef}
            key={i}
            allPaltes
            color={color}
            colors={colors}
            currentColor={currentColor}
            i={i}
          />
        );
      })}
    </>
  );
};

export default Colors;
