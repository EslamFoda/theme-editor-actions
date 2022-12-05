import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { changeDevice, changeWidth } from "../../../features/main-width";
import {
  AiOutlineMobile,
  AiOutlineTablet,
  AiOutlineDesktop,
} from "react-icons/ai";
const ChangeDevices = ({ dispatch, device }) => {
  return (
    <ToggleGroup.Root
      className="ToggleGroup flex gap-2"
      type="single"
      defaultValue="desktop"
      value={device}
      aria-label="Text alignment"
      onValueChange={(value) => {
        if (value) dispatch(changeDevice(value));
      }}
    >
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="mobile"
        aria-label="Left aligned"
      >
        <AiOutlineMobile
          size={32}
          onClick={() => {
            dispatch(changeWidth("412px"));
          }}
          className="hover:text-white cursor-pointer text-[#98A2B3]"
        />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="tablet"
        aria-label="Center aligned"
      >
        <AiOutlineTablet
          size={32}
          className="hover:text-white cursor-pointer text-[#98A2B3]"
          onClick={() => {
            dispatch(changeWidth("1024px"));
          }}
        />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="desktop"
        aria-label="Right aligned"
      >
        <AiOutlineDesktop
          onClick={() => {
            dispatch(changeWidth("100vw"));
          }}
          size={36}
          className="hover:text-white  cursor-pointer text-[#98A2B3]"
        />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default ChangeDevices;
