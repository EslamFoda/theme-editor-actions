import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utlis/firebase";
import Spinner from "../ui/spinner";
import SingleWebsite from "./singleWebsite";

const UserWebsites = ({ user }) => {
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(false);
  const q = query(collection(db, "themes"), where("userId", "==", user?.uid));

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setSites(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="px-4">
      {loading ? (
        <Spinner />
      ) : sites.length ? (
        sites?.map((site, i) => {
          return <SingleWebsite i={i} site={site} key={site.id} />;
        })
      ) : (
        <div className="w-full py-20 flex items-center justify-center text-center">
          <span className="font-bold text-gray-400">You Dont Have Website Yet Create New One</span>
        </div>
      )}
    </div>
  );
};

export default UserWebsites;
