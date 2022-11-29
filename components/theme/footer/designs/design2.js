import React from "react";


const Design1 = ({
  choose = false,
  
}) => {
  
  return (
    <>
      {choose ? (
        <div className=""></div>
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

export default Design1;
