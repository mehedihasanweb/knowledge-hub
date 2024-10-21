import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between pt-8">
      <h1 className="text-4xl font-bold">Knowledge Hub</h1>
      <img src={profile} alt="profile_image" />
    </div>
  );
};

export default Header;
