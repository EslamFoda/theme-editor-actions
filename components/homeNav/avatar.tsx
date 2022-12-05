const Avatar = ({ user }) => {
  return (
    <div className="lg:w-14 lg:h-14 md:h-14 md:w-14 h-10 w-10  flex items-center justify-center rounded-full bg-gray-300">
      <span className="lg:text-3xl md:text-3xl text-xl font-bold block uppercase -mt-2">
        {user?.email ? user?.email[0] : "G"}
      </span>
    </div>
  );
};

export default Avatar;
