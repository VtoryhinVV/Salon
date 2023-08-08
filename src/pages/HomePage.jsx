import '../App.css';
import { Hero } from '../components/Hero/Hero';
import { OurStory } from '../components/OurStory/OurStory';
import { Services } from '../components/Services/Services';
import { WhyUs } from '../components/WhyUs/WhyUs';

export function HomePage() {
  return (
    <>
      <Hero />
      <OurStory />
      <WhyUs />
      <Services />
    </>
  );
}
