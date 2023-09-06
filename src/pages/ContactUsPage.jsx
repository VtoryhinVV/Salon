import { HeroCommon } from '../components/HeroCommon/HeroCommon';

import { ContactUs } from '../components/ContactUs/ContactUs';
import { Reviews } from '../components/Reviews/Reviews';

const ContactUsPage = () => {
  return (
    <>
      <HeroCommon
        title="ContactUs"
        text="Get in touch with us"
        buttonText="Book appoinment"
      />
      <ContactUs back={false} />
      <Reviews />
    </>
  );
};

export default ContactUsPage;
