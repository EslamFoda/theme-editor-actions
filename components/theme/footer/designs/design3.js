import React from "react";


const Design3 = ({
  device,
  choose = false,
 
}) => {
  
  return (
    <>
      {choose ? (
        <div className="bg-white w-full h-full"></div>
      ) : (
        null
        // <div>
        //   <Container className="py-10 text-center">
        //     <div className=" border-b border-solid py-5 border-b-[#96999d]">
        //       <EditorComp
        //         handleEdit={handleEdit}
        //         initialValue={footerData.desc}
        //         keys="desc"
        //       />
        //       <ul className="flex justify-center flex-wrap gap-5">
        //         <li>
        //           <span
        //             className="block cursor-pointer font-bold text-black"
        //             aria-current="page"
        //           >
        //             Home
        //           </span>
        //         </li>
        //         <li>
        //           <span className="block  cursor-pointer font-bold text-black">
        //             About
        //           </span>
        //         </li>
        //         <li>
        //           <span className="block  cursor-pointer font-bold text-black">
        //             Services
        //           </span>
        //         </li>
        //         <li>
        //           <span className="block cursor-pointer  font-bold text-black">
        //             Pricing
        //           </span>
        //         </li>
        //         <li>
        //           <span className="block  cursor-pointer font-bold text-black">
        //             Contact
        //           </span>
        //         </li>
        //       </ul>
        //     </div>
        //     <div className="  gap-6 py-5">
        //       <EditorComp
        //         handleEdit={handleEdit}
        //         initialValue={footerData.copyRight}
        //         keys="copyRight"
        //       />
        //     </div>
        //   </Container>
        // </div>
      )}
    </>
  );
};

export default Design3;
