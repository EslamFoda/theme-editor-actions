import { FC } from "react";
import ActiveIcon from "./activeIcon";
import { FadeUp, Flip, NoAnimation, ZoomInUp } from "../icons";
interface Props {
  effect: string;
  i: number;
  currentEffect: string;
  setCurrentEffect: any;
  effects: [];
}

const AllEffects: FC<Props> = ({
  effect,
  i,
  currentEffect,
  setCurrentEffect,
  effects,
}) => {
  const handleSelectEffect = () => {
    setCurrentEffect(effects[i], "theme-effects");
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
        "h-full min-w-[220px] rounded-lg relative text-white p-4 pr-1 font font-choosedFont  bg-[#353f4b]  cursor-pointer",

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
        <h4>{effect.replace(/-/g, " ")}</h4>
      </div>
      <ActiveIcon styles={effect} currentStyle={currentEffect} />
    </div>
  );
};

export default AllEffects;
