import Link from "next/link";
import { useRef } from "react";
import EditBtn from "./editBtn";
import { FaEye } from "react-icons/fa";
import DeleteWebsite from "./deleteWebsite";
const SingleWebsite = ({ site, i }) => {
  const frameRef = useRef(null);
  console.log(site?.websiteInfo?.createdAt);

  return (
    <div
      key={site.id}
      style={{ boxShadow: "0 1px 2px 1px hsla(0,0%,40%,.08)" }}
      className="container m-auto flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start gap-2 justify-between bg-white text-black w-full rounded-lg my-8 p-4"
    >
      <div className="flex lg:flex-row md:flex-row flex-col gap-4 lg:items-center md:items-center items-start">
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
          <h2 className="lg:text-lg md:text-lg text-md text-black/70 font-bold">
            {site.websiteInfo.webSiteName}
          </h2>
          <h3 className="text-[#828181] lg:text-base md:text-base text-xs">
            It was created in{" "}
            {new Date(site?.websiteInfo?.createdAt?.toDate()).toDateString()}
          </h3>
        </div>
      </div>
      <div className="flex gap-8">
        <DeleteWebsite site={site} />
        <EditBtn site={site} />
      </div>
    </div>
  );
};

export default SingleWebsite;
