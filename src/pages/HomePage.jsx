import '../App.css';
import { Hero } from '../components/Hero/Hero';
import { OurStory } from '../components/OurStory/OurStory';
import { Services } from '../components/Services/Services';
import { WhyUs } from '../components/WhyUs/WhyUs';
import { BuyGift } from '../components/BuyGift/BuyGift';
import { ContactUs } from '../components/ContactUs/ContactUs';
import { Reviews } from '../components/Reviews/Reviews';
import { Instagram } from '../components/Instagram/Instagram';

function HomePage() {
  return (
    <>
      <Hero />
      <OurStory />
      <WhyUs />
      <Services />
      <BuyGift />
      <Reviews />
      <Instagram />
      <ContactUs />
    </>
  );
}

export default HomePage;
