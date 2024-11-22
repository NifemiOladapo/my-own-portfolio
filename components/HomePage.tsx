import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Projects from "./Projects";
import TechStack from "./TechStack";

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <TechStack />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
};

export default HomePage;
