import { Helmet } from "react-helmet-async";

import Banner from "../../components/Shared/Banner/Banner";
import NewsLetter from "../../components/Shared/NewsLetter/NewsLetter";
import ContactForm from "../../components/ContactUs/ContactForm";
import Cards from "../../components/ContactUs/Cards";
import GoogleMap from "../../components/ContactUs/GoogleMap";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>DocHub - Contact Us</title>
      </Helmet>
      <section>
        <Banner heading="Contact Us" pageTitle="Contact Us" />
        <ContactForm />
        <Cards />
        <GoogleMap />
        <NewsLetter />
      </section>
    </>
  );
};

export default ContactUs;
