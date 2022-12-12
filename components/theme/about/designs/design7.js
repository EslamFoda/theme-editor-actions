import Container from "../../../ui/container";

const Design7 = () => {
  return (
    <div className="bg-white w-full  h-full">
      <Container>
        <div className="min-h-[70px] py-2 grid lg:grid-cols-8 md:grid-cols-8 grid-cols-1 w-full gap-x-1 gap-y-1">
          <div
            style={{ zIndex: 1 }}
            className="mb-16 hidden lg:block md:block space-y-1 p-3 mt-12 col-end-9 col-start-4 row-start-1 row-end-2  drop-shadow-lg bg-white"
          >
            <h1 className="text-small font-bold">About us</h1>
            <p className="text-very-small max-w-[150px]">
              Write a background about your work including your history your
              accomplishments and any awards you have received Use this section
              to showcase the features of your brand
            </p>
          </div>
          <div className="space-y-4 block lg:hidden md:hidden   drop-shadow-lg">
            <h1 className="text-small font-bold">About us</h1>
            <p className="text-very-small max-w-[150px]">
              Write a background about your work including your history your
              accomplishments and any awards you have received Use this section
              to showcase the features of your brand
            </p>
          </div>

          <div className="lg:self-stretch lg:col-end-6 lg:col-start-1 lg:row-end-2 lg:row-start-1  md:self-stretch md:col-end-6 md:col-start-1 md:row-end-2 md:row-start-1">
            <div
              className="h-[100px] relative img-editor-container"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1483706571191-85c0c76b1947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79d169c2bf199ce6912f72c20ec301e4&auto=format&fit=crop&w=500&q=80)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                MozBackgroundSize: "center center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Design7;
