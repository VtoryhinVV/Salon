import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Image, GalleryHero } from "./CustomBanner.styled";

import hero1 from "/img/hero1.jpg";
import hero2 from "/img/hero2.jpg";
import hero3 from "/img/hero3.jpg";
import hero4 from "/img/hero4.jpg";

const items = [
  <Image data-value="1" src={hero1} key={1} />,
  <Image data-value="2" src={hero2} key={2} />,
  <Image data-value="3" src={hero3} key={3} />,
  <Image data-value="4" src={hero4} key={4} />,
];

export const CustomBanner = () => (
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
      items={items}
      controlsStrategy="alternate"
    />
  </GalleryHero>
);
