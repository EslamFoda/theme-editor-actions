import { useRouter } from "next/router";
import ChangeDevices from "./changeDevices";

const Mode = ({ editSections, dispatch, device }) => {
  const { push } = useRouter();
  return (
    <div className="flex items-center gap-4">
      {editSections ? (
        <span className="text-white text-sm hidden lg:block  font-semibold">
          Edit Mode
        </span>
      ) : (
        <span className="text-white text-sm hidden lg:block  font-semibold">
          Preview Mode
        </span>
      )}
      <div className="hidden sm:block lg:hidden">
      <ChangeDevices dispatch={dispatch} device={device} />
      </div>

      <div
        onClick={() => {
          push("/");
        }}
        className="bg-[#2b3642] p-1 cursor-pointer hover:opacity-80"
      >
        <svg
          className="fill-white"
          width="32px"
          height="32px"
          viewBox="0 0 48 48"
        >
          <g>
            <g>
              <path d="M42,48H28V35h-8v13H6V27c0-0.552,0.447-1,1-1s1,0.448,1,1v19h10V33h12v13h10V28c0-0.552,0.447-1,1-1s1,0.448,1,1V48z"></path>
            </g>
            <g>
              <path d="M47,27c-0.249,0-0.497-0.092-0.691-0.277L24,5.384L1.691,26.723c-0.399,0.381-1.032,0.368-1.414-0.031     c-0.382-0.399-0.367-1.032,0.031-1.414L24,2.616l23.691,22.661c0.398,0.382,0.413,1.015,0.031,1.414     C47.526,26.896,47.264,27,47,27z"></path>
            </g>
            <g>
              <path d="M39,15c-0.553,0-1-0.448-1-1V8h-6c-0.553,0-1-0.448-1-1s0.447-1,1-1h8v8C40,14.552,39.553,15,39,15z"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Mode;
