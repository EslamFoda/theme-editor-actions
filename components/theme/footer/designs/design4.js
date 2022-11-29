import React from "react";

const Design4 = ({ choose = false }) => {
  return (
    <>
      {
        choose ? <div className=""></div> : null
        // <div>
        //   <Container className="py-10 text-center">
        //     <div className="py-8">
        //       <EditorComp
        //         handleEdit={handleEdit}
        //         initialValue={footerData.copyRight}
        //         keys="copyRight"
        //       />
        //     </div>
        //   </Container>
        // </div>
      }
    </>
  );
};

export default Design4;
