import About from "./About";
// import Contact from "./Contact";
import Header from "./Header";
import Projects from "./Projects";
import TechStack from "./TechStack";

const HomePage = () => {
  return (
    <main>
      <Header />
      <About />
      <TechStack />
      <Projects />
      {/* <Contact /> */}
    </main>
  );
};

export default HomePage;
