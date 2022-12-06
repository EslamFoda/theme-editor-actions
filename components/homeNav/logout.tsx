import { signOut } from "firebase/auth";
import { auth } from "../../utlis/firebase";
const Logout = () => {
  const logout = async () => {
    try {
      const userLogout = await signOut(auth);
    } catch (error) {
    }
  };
  return (
    <div>
      <button
        onClick={logout}
        className="bg-[#202c39] text-white py-1 hover:opacity-90 transition-all shadow-md px-2 rounded-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
