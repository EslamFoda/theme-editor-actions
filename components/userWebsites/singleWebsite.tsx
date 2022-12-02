import Link from "next/link";
import { useRef } from "react";
import EditBtn from "./editBtn";
import { FaEye } from "react-icons/fa";
const SingleWebsite = ({ site, i }) => {
  const frameRef = useRef(null);

  return (
    <div
      key={site.id}
      className="container m-auto flex items-center justify-between bg-white text-black drop-shadow-md w-full my-8 p-4"
    >
      <div className="flex gap-4 items-center">
        <Link href={`https://theme-preview-alpha.vercel.app/${site.id}`}>
          <a target="_blank">
            <div className="relative group">
              <div className="absolute group-hover:flex cursor-pointer transition-all  items-center justify-center top-0 right-0 w-full h-full hidden bg-black/75 z-20">
                <FaEye color="white" size={30} />
              </div>
              <div
                className="thumbnail-container"
                title="Thumbnail Image of website"
              >
                <div className="thumbnail">
                  <iframe
                    ref={frameRef}
                    src={`https://theme-preview-alpha.vercel.app/${site.id}`}
                  ></iframe>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <div className="space-y-2">
          <h2 className="text-lg text-black/70 font-bold">
            {site.websiteInfo.webSiteName}
          </h2>
          <h3 className="text-[#828181]">
          It was created in{" "}
            {new Date(site.websiteInfo.createdAt.toDate()).toDateString()}
          </h3>
        </div>
      </div>
      <div>
        <EditBtn site={site} />
      </div>
    </div>
  );
};

export default SingleWebsite;
