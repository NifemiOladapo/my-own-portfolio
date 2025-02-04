import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-[#091b29] w-full min-h-screen">
      <Navbar />
      <HeroContent />
    </header>
  );
};

export default Header;
