import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../utlis/firebase";

const CreateWebsite = ({ user }) => {
  const { push } = useRouter();
  const docRef = collection(db, "themes");

  const webData = {
    addSection: false,
    allSections: [
      {
        id: Math.floor(Math.random() * Date.now()).toString(),
        compName: "hero",
        designNum: 1,
        compData: {
          title:
            "<p class='text-3xl mb-5'>clothes is a leading business in the clothes industry</p>",
          subTitle:
            "<span class='tinymce-header'>Learn about our services and join our community today </span>",
          primaryBtn: "<span>shop now</span>",
          secondaryBtn: "<span>Learn More</span>",
          pic: "https://images.unsplash.com/photo-1580197370215-38fdb17dfe8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1590&q=80",
        },
        backgroundColor: {
          r: "255",
          g: "255",
          b: "255",
          a: "1",
        },
      },
      {
        id: Math.floor(Math.random() * Date.now()).toString(),
        compName: "footer",
        designNum: 1,
        compData: {
          desc: "<p class='mb-5'>orem ipsum dolor sit amet, consectetuputate eros. Fusce imperdiet condimentum augue, ut ull</p>",
          copyRight:
            "<span class='inline-block text-lg text-gray-400'>© All rights reserved</span>",
        },
        backgroundColor: {
          r: "255",
          g: "255",
          b: "255",
          a: "1",
        },
      },
    ],
    colorsEdit: false,
    compName: "",
    containerWidth: "100%",
    editEffects: false,
    editFiles: false,
    editImg: false,
    editSections: false,
    fontEdit: false,
    itemIndex: 0,
    nextIndex: 0,
    selectSection: false,
    stylesEditing: false,
    themeColor: "Captain-Green",
    themeFont: "sans",
    userId: user?.uid,
  };

  const createWeb = async () => {
    try {
      const website = await addDoc(docRef, webData);
      push(`/site/${website.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white shadow-md w-full">
      <div className="flex items-center justify-between container m-auto py-14">
        <div className="space-y-2 ">
          <h1 className="text-3xl text-[#1A1A1A] font-bold">
            Manage your sites
          </h1>
          <span className="block text-[rgba(0,0,0,.6)]">
            From here you can manage / upgrade or modify your site settings
          </span>
        </div>
        <div>
          <button
            onClick={createWeb}
            className="text-white bg-[#00a991] hover:bg-[#0ea08a] py-2 px-5 rounded-full"
          >
            Create New Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateWebsite;
