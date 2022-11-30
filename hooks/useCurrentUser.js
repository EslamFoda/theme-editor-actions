import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utlis/firebase";

const useCurrentUser = () => {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return { user };
};

export default useCurrentUser;
