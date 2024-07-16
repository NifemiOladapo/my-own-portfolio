import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-blue-950 w-full min-h-screen">
      <Navbar />
      <HeroContent />

    </div>
  );
};

export default Header;
