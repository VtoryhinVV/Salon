import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Image, GalleryHero, ImageBlock } from './CustomBanner.styled';

import hero1 from '/img/hero1.jpg';
import hero2 from '/img/hero2.jpg';
import hero3 from '/img/hero3.jpg';
import hero4 from '/img/hero4.jpg';

import heroMob1 from '/img/mob/bghero1.jpg';
import heroMob2 from '/img/mob/bghero2.jpg';
import heroMob3 from '/img/mob/bghero3.jpg';
import heroMob4 from '/img/mob/bghero4.jpg';
import { useMediaQuery } from 'react-responsive';

const items = [
  <ImageBlock data-value="1" backgroundUrl={hero1} key={1} />,
  <ImageBlock data-value="2" backgroundUrl={hero2} key={2} />,
  <ImageBlock data-value="3" backgroundUrl={hero3} key={3} />,
  <ImageBlock data-value="4" backgroundUrl={hero4} key={4} />,
];

const itemsMob = [
  <Image data-value="1" src={heroMob1} key={1} />,
  <Image data-value="2" src={heroMob2} key={2} />,
  <Image data-value="3" src={heroMob3} key={3} />,
  <Image data-value="4" src={heroMob4} key={4} />,
];

export const CustomBanner = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <GalleryHero>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={500}
        animationType="fadeout"
        infinite
        disableButtonsControls
        mouseTracking
        items={isMobile ? itemsMob : items}
        controlsStrategy="alternate"
      />
    </GalleryHero>
  );
};
