import { useRef } from "react";
import EditBtn from "./editBtn";
const SingleWebsite = ({ site, i }) => {
  const frameRef = useRef(null);

  return (
    <div
      key={site.id}
      className="container m-auto flex items-center justify-between bg-white text-black drop-shadow-md w-full my-8 p-4"
    >
      <div className="flex gap-4 items-center">
        <div className="thumbnail-container" title="Thumbnail Image of website">
          <div className="thumbnail">
            <iframe
              ref={frameRef}
              src={`https://theme-preview-alpha.vercel.app/${site.id}`}
            ></iframe>
          </div>
        </div>
        <h1 className="text-lg font-bold">{`project ${i + 1}`}</h1>
      </div>
      <div>
        <EditBtn site={site} />
      </div>
    </div>
  );
};

export default SingleWebsite;
