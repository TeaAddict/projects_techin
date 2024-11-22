const Profile = ({ avatar, username, tag, location }) => {
  return (
    <div className="bg-[#C2DCDD] text-black py-[2rem] px-[10rem]">
      <img src={avatar} className="rounded-full" />
      <h1>{username}</h1>
      <p>{"@" + tag}</p>
      <p>{location}</p>
    </div>
  );
};

export default Profile;
