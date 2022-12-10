import { FC } from "react";
import ActiveIcon from "../activeIcon";
import { FadeUp, Flip, NoAnimation, ZoomInUp } from "../../icons";
import { updateDoc } from "firebase/firestore";
interface Props {
  effect: string;
  i: number;
  currentEffect: string;
  effects: [];
  docRef: any;
}

const AllEffects: FC<Props> = ({
  effect,
  i,
  currentEffect,
  effects,
  docRef,
}) => {
  const handleSelectEffect = async () => {
    await updateDoc(docRef, {
      themeEffect: effects[i],
    });
  };
  const effectsIcons = {
    0: NoAnimation,
    1: FadeUp,
    2: ZoomInUp,
    3: Flip,
  };

  const EffectIcon = effectsIcons[i];

  return (
    <div
      key={i}
      onClick={handleSelectEffect}
      className={[
        "lg:h-full md:h-full h-[70px] lg:min-w-[220px] md:min-w-[220px] min-w-[160px]  rounded-lg relative text-white p-4 pr-1 font font-choosedFont  bg-[#353f4b]  cursor-pointer",
        `${
          effect === currentEffect
            ? "border-[#23cba5] border-[3px] border-solid"
            : "border-[3px] border-[#26313f]"
        }`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-4">
        <EffectIcon />
        <h4 className="lg:text-base md:text-base text-xs">{effect.replace(/-/g, " ")}</h4>
      </div>
      <ActiveIcon styles={effect} currentStyle={currentEffect} />
    </div>
  );
};

export default AllEffects;
