import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utlis/firebase";
import SingleWebsite from "./singleWebsite";

const UserWebsites = ({ user }) => {
  const [sites, setSites] = useState([]);
  useEffect(() => {
    const getAllWebsites = async () => {
      const q = query(
        collection(db, "themes"),
        where("userId", "==", user?.uid)
      );
      const data = await getDocs(q);
      console.log(data.docs);
      setSites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    if (user) {
      getAllWebsites();
    }
  }, [user]);

  return (
    <>
      {sites?.map((site, i) => {
        return <SingleWebsite i={i} site={site} key={site.id} />;
      })}
    </>
  );
};

export default UserWebsites;
