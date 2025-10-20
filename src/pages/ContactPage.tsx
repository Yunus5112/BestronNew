import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import { ContactMapSection } from "../components/contact/ContactMapSection";

export const ContactPage = () => {
  return (
    <>
      {/* Contact Form Section */}
      <Contact />

      {/* Map and Contact Info Section */}
      <ContactMapSection />

      {/* Footer - Show map link only on contact page */}
      <Footer showMapLink={true} />
    </>
  );
};

export default ContactPage;
