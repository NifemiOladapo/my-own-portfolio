import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-[#091b29] w-full min-h-screen">
      <Navbar />
      <HeroContent />

    </div>
  );
};

export default Header;
