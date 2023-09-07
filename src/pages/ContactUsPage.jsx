import { HeroCommon } from '../components/HeroCommon/HeroCommon';

import { ContactUs } from '../components/ContactUs/ContactUs';
import { Reviews } from '../components/Reviews/Reviews';

const ContactUsPage = () => {
  return (
    <main>
      <HeroCommon
        title="CONTACT US"
        text="Get in touch with us"
        buttonText="Book appoinment"
      />
      <ContactUs back={false} />
      <Reviews />
    </main>
  );
};

export default ContactUsPage;
