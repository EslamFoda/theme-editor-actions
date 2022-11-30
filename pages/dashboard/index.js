import useCurrentUser from "../../hooks/useCurrentUser";
import Button from "../../components/ui/Button";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../utlis/firebase";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";

const Dashboard = () => {
  const docRef = collection(db, "themes");
//   const { user } = useCurrentUser();
  const {user} = useAuth()
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
    userId: user.uid,
  };

  const createWeb = async () => {
    await addDoc(docRef, webData);
  };

  //   useEffect(
  //     () =>
  //       onSnapshot(
  //         query(
  //           collection(db,"themes"),
  //           where("userId", "==", user.uid),
  //           (snapshot) =>
  //             setArticles(
  //               snapshot.docs.map((doc) => ({
  //                 ...doc.data(),
  //                 id: doc.id,
  //               }))
  //             )
  //             console.log(snapshot.docs)
  //         )
  //       ),
  //     []
  //   );

  useEffect(() => {
   
    const getAllWebsites = async () => {
      const q = query(
        collection(db, "themes"),
        where("userId", "==", user?.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    };
    if (user) {
      getAllWebsites();
    }
  }, [user]);

  return (
    <>
      {user?.email}
      <div>
        <Button onClick={createWeb} variant="custom">
          create website
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
