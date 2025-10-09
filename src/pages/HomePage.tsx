import ServicesOverview from "../components/ServicesOverview";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export const HomePage = () => {
  return (
    <>
      <ServicesOverview />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
