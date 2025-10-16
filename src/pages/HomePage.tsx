import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <ServicesOverview />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
