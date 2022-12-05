import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utlis/firebase";
import SingleWebsite from "./singleWebsite";

const UserWebsites = ({ user }) => {
  const [sites, setSites] = useState([]);
  const q = query(collection(db, "themes"), where("userId", "==", user?.uid));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setSites(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="px-4">
      {sites?.map((site, i) => {
        return <SingleWebsite i={i} site={site} key={site.id} />;
      })}
    </div>
  );
};

export default UserWebsites;
