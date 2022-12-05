import Avatar from "./avatar";
import Logout from "./logout";

const HomeNav = ({ user }) => {
  return (
    <nav
      style={{ boxShadow: "0 1px 4px 1px rgba(0,0,0,.05)" }}
      className="bg-white px-4 z-50  sticky py-2 top-0 right-0"
    >
      <div className="container m-auto   w-full flex flex-wrap gap-3 items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar user={user} />
          <h1 className="lg:text-base md:text-base text-xs">
            {user?.email ? user?.email : "Logged in as Guest"}
          </h1>
        </div>
        <Logout />
      </div>
    </nav>
  );
};

export default HomeNav;
