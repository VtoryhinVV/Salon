import { HeroCommon } from '../components/HeroCommon/HeroCommon';
import { OurStory } from '../components/OurStoryAboutUs/OurStory';
import { OurTeam } from '../components/OurTeam/OurTeam';
import { Advantages } from '../components/Advantages/Advantages';
import { Instagram } from '../components/Instagram/Instagram';

const AboutUs = () => {
  return (
    <main>
      <HeroCommon
        title="Discover Our story"
        texts="Short story about us & meet the team"
        buttonText="Book appoinment"
      />
      <OurStory />
      <OurTeam />
      <Advantages />
      <Instagram imgBg />
    </main>
  );
};

export default AboutUs;
