import React from "react";

const Design5 = ({ choose = false }) => {
  return (
    <div className='bg-white w-full h-full'>
      {choose ? (
        <div className=""></div>
      ) : null
      // <div>
      //   <Container className="py-10 text-center">
      //     <div className="py-8">
      //       <ul className="flex  flex-wrap gap-5">
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
      //   </Container>
      // </div>
      }
    </div>
  );
};

export default Design5;
