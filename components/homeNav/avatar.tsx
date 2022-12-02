const Avatar = ({ user }) => {
  return (
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300">
      <span className="text-3xl font-bold block uppercase -mt-2">{user?.email[0]}</span>
    </div>
  );
};

export default Avatar;
