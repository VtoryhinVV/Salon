import '../App.css';
import { Hero } from '../components/Hero/Hero';
import { OurStory } from '../components/OurStory/OurStory';
import { WhyUs } from '../components/WhyUs/WhyUs';
import { BuyGift } from '../components/BuyGift/BuyGift';

export function HomePage() {
  return (
    <>
      <Hero />
      <OurStory />
      <WhyUs />

      <BuyGift />
    </>
  );
}
