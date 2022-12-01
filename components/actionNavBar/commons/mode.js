import { useRouter } from "next/router";

const Mode = ({ editSections }) => {
  const { push } = useRouter();
  return (
    <div className="flex items-center gap-4">
      {editSections ? (
        <span className="text-white font-bold">Edit Mode</span>
      ) : (
        <span className="text-white font-bold">Preview Mode</span>
      )}

      <h2
        onClick={() => {
          push("/");
        }}
        className="text-white cursor-pointer"
      >
        home
      </h2>
    </div>
  );
};

export default Mode;
