import Avatar from "./avatar";
import Logout from "./logout";

const HomeNav = ({ user }) => {
  return (
    <nav className="bg-white z-50 shadow-md sticky py-2 top-0 right-0">
      <div className="container m-auto   w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar user={user} />
          <h1>{user?.email}</h1>
        </div>
        <Logout />
      </div>
    </nav>
  );
};

export default HomeNav;
