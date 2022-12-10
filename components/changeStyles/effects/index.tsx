import AllEffects from "./allEffects";

const Effects = ({ effects, docRef, currentEffect }) => {
  return (
    <>
      {effects?.map((effect, i) => {
        return (
          <AllEffects
            docRef={docRef}
            effects={effects}
            effect={effect}
            i={i}
            key={i}
            currentEffect={currentEffect}
          />
        );
      })}
    </>
  );
};

export default Effects;
